'use client';
import React, { useState, useEffect } from 'react';

const ContactUsCard = ({ showAlert }: { showAlert: (message: string, variant: 'success' | 'error') => void }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [buttonStyle, setButtonStyle] = useState<React.CSSProperties>({});

  const validate = () => {
    if (!formData.firstName || !formData.email || !formData.message || !formData.phone) {
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return false;
    }
    if (!/^[0-9]{10}$/.test(formData.phone)) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    const validity = validate();
    setIsValid(validity);
    if (validity) {
      setButtonStyle({}); // Reset style when form becomes valid
    }
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          showAlert('Message sent successfully!', 'success');
          setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        } else {
          showAlert('Failed to send message. Please try again.', 'error');
        }
      } catch (error) {
        showAlert('Failed to send message. Please try again.', 'error');
      }
      setIsSubmitting(false);
    } else {
      showAlert('Please fill out all required fields correctly.', 'error');
    }
  };

  const handleButtonHover = () => {
    if (!isValid) {
      const top = Math.random() * 80;
      const left = Math.random() * 80;
      setButtonStyle({
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        transition: 'top 0.3s ease, left 0.3s ease',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white p-14 rounded-lg shadow-md aspect-square text-black flex flex-col justify-center items-start gap-6 relative'>
        <h2 className='text-4xl pb-8'>Get In Touch</h2>
        <div className='flex justify-around items-center gap-8 w-full'>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First Name' className='border-1 border-black focus:outline-none w-1/2 bg-transparent px-4 py-2 rounded-[6]'/>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last Name' className='border-1 border-black focus:outline-none w-1/2 bg-transparent px-4 py-2 rounded-[6]'/>
        </div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email address' className='border-1 border-black focus:outline-none w-full bg-transparent px-4 py-2 rounded-[6]'/>
        <div className='border-1 border-black rounded-[6] w-full flex items-center px-4'>
            <span className='text-black pr-2 whitespace-nowrap'>+91 |</span>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone number' className='focus:outline-none bg-transparent w-full py-2'/>
        </div>
        <div className='w-full flex flex-col gap-4'>
            <label className='font-extralight text-lg' htmlFor="message">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='' className='border-1 border-black focus:outline-none w-full bg-transparent px-4 py-2 rounded-[6] resize-none' rows={3}/>
        </div>
        <button type="submit" disabled={isSubmitting } className="bg-pinkcity-dark text-white font-bold py-2 px-4 rounded-lg transition-colors" style={buttonStyle} onMouseEnter={handleButtonHover}>
            {isSubmitting ? 'Submitting...' : 'Send Message'}
        </button>
    </form>
  )
}

export default ContactUsCard;
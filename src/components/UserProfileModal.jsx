import { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import './UserProfileModal.css';

export default function UserProfileModal({ isOpen, onClose }) {
  const [userInfo, setUserInfo] = useState({
    name: 'Karan Sharma',
    email: 'karan@example.com',
    phone: '+91 98765 43210',
    address: '123 Tech Park, Mumbai, India'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2>Edit Profile</h2>
          <p>Update your personal information.</p>
        </div>

        <div className="avatar-section">
          <div className="avatar-wrapper">
            <div className="avatar-placeholder">
              <User size={40} />
            </div>
            <button className="edit-avatar-btn">
              <Camera size={14} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-icon-wrapper">
              <User size={18} className="input-icon" />
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={userInfo.name} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-icon-wrapper">
              <Mail size={18} className="input-icon" />
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={userInfo.email} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-icon-wrapper">
              <Phone size={18} className="input-icon" />
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={userInfo.phone} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <div className="input-icon-wrapper">
              <MapPin size={18} className="input-icon" />
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={userInfo.address} 
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-save">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

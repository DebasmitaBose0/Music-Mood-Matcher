import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import './login.css'

export default function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')

        // Validation
        if (!email.trim()) {
            setError('Please enter your email address')
            return
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address')
            return
        }

        if (!userName.trim()) {
            setError('Please enter your name')
            return
        }

        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            const userData = {
                email,
                userName,
                loginTime: new Date().toISOString(),
                userId: Math.random().toString(36).substr(2, 9)
            }

            // Save to localStorage
            localStorage.setItem('musicMoodUser', JSON.stringify(userData))

            setIsLoading(false)
            onLoginSuccess(userData)
        }, 1000)
    }

    return (
        <div className="login-container">
            <div className="login-background">
                <div className="musical-note note-1">♪</div>
                <div className="musical-note note-2">♫</div>
                <div className="musical-note note-3">🎵</div>
                <div className="musical-note note-4">♪</div>
                <div className="musical-note note-5">♫</div>
                <div className="musical-note note-6">🎶</div>
            </div>

            <motion.div
                className="login-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Animated Header */}
                <motion.div
                    className="login-header"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <div className="header-icon">🎵</div>
                    <h1>Music Mood Matcher</h1>
                    <p className="header-subtitle">Find Your Perfect Song</p>
                </motion.div>

                {/* Animated Decorative Elements */}
                <div className="decorative-bars">
                    <motion.div
                        className="bar"
                        animate={{ height: ['20px', '40px', '20px'] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    ></motion.div>
                    <motion.div
                        className="bar"
                        animate={{ height: ['30px', '50px', '30px'] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    ></motion.div>
                    <motion.div
                        className="bar"
                        animate={{ height: ['25px', '45px', '25px'] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }}
                    ></motion.div>
                    <motion.div
                        className="bar"
                        animate={{ height: ['20px', '40px', '20px'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.1 }}
                    ></motion.div>
                    <motion.div
                        className="bar"
                        animate={{ height: ['28px', '48px', '28px'] }}
                        transition={{ duration: 0.65, repeat: Infinity, delay: 0.3 }}
                    ></motion.div>
                </div>

                {/* Login Form */}
                <form className="login-form" onSubmit={handleLogin}>
                    {/* Error Message */}
                    {error && (
                        <motion.div
                            className="error-message"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="error-icon">⚠️</span>
                            <span className="error-text">{error}</span>
                        </motion.div>
                    )}

                    {/* Name Input */}
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <label htmlFor="userName">
                            <span className="label-icon">🎤</span>
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            id="userName"
                            type="text"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            disabled={isLoading}
                            className="form-input"
                        />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <label htmlFor="email">
                            <span className="label-icon">📧</span>
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            className="form-input"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        className="login-btn"
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        {isLoading ? (
                            <>
                                <span className="spinner"></span>
                                Authenticating...
                            </>
                        ) : (
                            <>
                                <span className="btn-icon">🎶</span>
                                <span className="btn-text">Start Your Journey</span>
                            </>
                        )}
                    </motion.button>
                </form>

                {/* Info Message */}
                <motion.p
                    className="login-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <span className="info-icon">🔒</span>
                    <span className="info-text">Your data is securely stored in your browser</span>
                </motion.p>
            </motion.div>
        </div>
    )
}

Login.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired
}

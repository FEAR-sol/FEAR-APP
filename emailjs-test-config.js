// EmailJS Test Configuration
// Use this file to test your EmailJS setup before going live

export const testEmailJSConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here', 
  publicKey: 'your_public_key_here',
  
  // Test template parameters
  testParams: {
    from_name: 'Test User',
    from_email: 'test@example.com',
    to_email: 'contact@fear.in',
    message: 'This is a test message from the FEAR website contact form.',
    subject: 'Test Contact Form Submission from Test User'
  }
};

// Test function to verify EmailJS setup
export const testEmailJS = async () => {
  try {
    const emailjs = await import('@emailjs/browser');
    
    const result = await emailjs.default.send(
      testEmailJSConfig.serviceId,
      testEmailJSConfig.templateId,
      testEmailJSConfig.testParams,
      testEmailJSConfig.publicKey
    );
    
    console.log('✅ EmailJS test successful:', result);
    return { success: true, result };
  } catch (error) {
    console.error('❌ EmailJS test failed:', error);
    return { success: false, error };
  }
};

// Instructions:
// 1. Replace the credentials above with your actual EmailJS values
// 2. Open browser console and run: testEmailJS()
// 3. Check your email at contact@fear.in for the test message
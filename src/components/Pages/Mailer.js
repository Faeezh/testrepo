import React from 'react';
import emailjs from 'emailjs-com';
const Mailer = () => {
    function sendEmail (e){
        e.preventDefault();

        emailjs.sendForm(
            'service_5hr3glh',
            'template_m7mk0bc',
            e.target,
            "user_veS6JV07taExhk9mLRsWE"
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err));
            e.target.reset()
    }
    return (
        <div className="container border"
        style={{marginTop:"50px", 
        width:"50%",
        backgroundImage:`url('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg')`, 
        backgroundPosition: "center",
        backgroundSize: "cover",}}>
            <h1 style={{marginTop:"25px"}}>Contact Form</h1>
            <form className="row" style={{ margin:"25px 85px 75px 100px" }}
            onSubmit={sendEmail}
            >
                <label>name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type='submit' value='Send' className="form-control btn btn-primary"
                style={{ marginTop: '30px'}}
                />
            </form>
        </div>
    )
}

export default Mailer

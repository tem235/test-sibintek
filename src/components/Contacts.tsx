import * as React from "react";

const Contacts = () => (
    <div id={'contacts'} className={'section contacts'}>
        <h1>Contact me</h1>
        <div className="contacts-wrap">
            <form className="contacts-form">
                <label><input type="text" placeholder={'Name'}/></label>
                <label><input type="text" placeholder={'Phone'}/></label>
                <label><textarea placeholder={'Your message'}/></label>
                <button className={'btn'}>Send</button>
            </form>
            <div className="contacts-info">
                <p className={'text-color--accent'}>If you liked my work, write to me. I will
                choose the most convenient time and place.
                Do not forget to bring a good mood.</p>

                <div className="contacts-info-item">
                    <h4>My telegram</h4>
                    <a href={'https://telegram.me/tem235'}>@Tem235</a>
                </div>

                <div className="contacts-info-item">
                    <h4>My E-mail</h4>
                    <a href={'mailto:tem235@gmail.com'}>tem235@gmail.com</a>
                </div>
            </div>

        </div>
    </div>
);

export default Contacts;
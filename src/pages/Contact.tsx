import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface cntact {
  themeState: boolean;
}
interface data {
  name: string;
  email: string;
  msg: string;
}
const containerStyle = {
  width: "100%",
  height: "400px",
};

const Contact: React.FC<cntact> = ({ themeState }) => {
  const [data, setData] = useState<any>({
    name: "",
    email: "",
    message: "",
  });
  console.log('data',data);
  
  const center = {
    lat: 22.5726, // Latitude of the center point
    lng: 88.3639, // Longitude of the center point
  };
  const handleInputChange =(e:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
    const {name,value} = e.target;
    setData({
        ...data,
        [name]: value
    })
  }

  const onSubmit =(e:React.FormEvent)=>{
    e.preventDefault()
    console.log('submitted',data);
   const store = localStorage.setItem("formData",JSON.stringify(data))
   console.log('Form Submitted and Data Stored in localStorage:',data);
   
  }

  const savedData = localStorage.getItem('formData');
  if(savedData){
    const parsedData = JSON.parse(savedData);
    console.log('RetrieveData',parsedData);
    
  }
  return (
    <>
      <div className={`right_part ${themeState ? "" : "dark"}`}>
        <div className="right_part_inner">
          <div className="rightinner_contain">
            <div data-aos="fade-right" data-aos-duration="1200">
              <div className="container">
                <div className="tokyo_about">
                  <div className="tokyo_title">
                    <div className="title_flex">
                      <p className="m-0">
                        <span>Contact</span>
                        <h3>Get in Touch</h3>
                      </p>
                    </div>
                  </div>
                  <div className="tokyo_map">
                    <LoadScript googleMapsApiKey="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao">
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                      >
                        <Marker position={center} />
                      </GoogleMap>
                    </LoadScript>
                  </div>
                  <div className="tokyo_contact">
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id=""
                          placeholder="Name"
                          className="form-control"
                          value={data.name}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          id=""
                          placeholder="Email"
                          className="form-control"
                          value={data.email}
                          onChange={handleInputChange}

                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          id=""
                          placeholder="message"
                          className="form-control"
                          value={data.message}
                          onChange={handleInputChange}

                        ></textarea>
                      </div>
                      <button type="submit">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

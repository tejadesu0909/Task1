import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const aboutus = () => {
  const [auth, setAuth] = useState(false)
  if (auth) return <Navigate to = "/" />

  return (
    <div>
      <h2>About us</h2>
      <center>
        <button onClick={()=> setAuth(true)}>Home page</button>
      </center>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Eleifend turpis
        quisque porta, dolor primis varius aenean. Eros suspendisse ac venenatis
        dictumst nulla augue integer lacus iaculis. Gravida dictum laoreet, duis
        primis per suspendisse. Curae mattis sapien magna nulla faucibus. Id
        dapibus ligula ex aliquam est ex sed. Convallis duis fermentum semper ex
        dolor cras. Amagna ac placerat curabitur malesuada taciti habitant.
        Congue luctus conubia maximus montes proin et euismod finibus nostra.
        Nunc interdum suscipit curabitur tempor accumsan senectus massa.
        Molestie purus vestibulum aenean facilisi porta pellentesque? Lobortis
        consequat montes maecenas ultrices egestas interdum maximus? Duis
        porttitor erat aliquet blandit aenean. Augue aptent lacinia tristique eu
        sapien vel tristique quisque. Ornare blandit metus leo cubilia;
        dignissim dignissim. Arcu pellentesque pulvinar penatibus risus
        pellentesque vivamus ullamcorper sociosqu. Nullam ullamcorper mus
        interdum; nascetur dictumst pretium. Cubilia eu sed magnis et rutrum
        dis? Tempor aptent commodo maximus lacus non platea in eu montes. Aenean
        dignissim odio molestie vestibulum dolor gravida duis. Sed nullam
        accumsan orci placerat euismod imperdiet varius nec at. Hac iaculis
        posuere quis euismod iaculis viverra taciti senectus commodo. Viverra
        nec pellentesque nulla; nullam habitant est. Hendrerit class elementum
        curabitur aliquet ligula. Fames sagittis parturient vehicula cursus
        curabitur dis eleifend. Imperdiet iaculis porta hac libero vulputate
        facilisi parturient. Eu a semper hac elit vivamus luctus sed molestie
        accumsan. Vulputate nisl erat turpis porta class senectus tortor
        conubia. Sociosqu mus vehicula vel amet morbi et. Conubia fringilla
        dignissim facilisis himenaeos torquent; dolor est bibendum. Condimentum
        luctus sodales hac lacus risus fames. Malesuada integer posuere
        himenaeos tellus mus laoreet. Odio ornare finibus; class tempor nisi
        adipiscing nisi morbi. Pellentesque augue bibendum non justo, risus
        nibh. Tortor felis metus ex volutpat ullamcorper mollis. Magnis duis sed
        volutpat netus vitae eleifend. Semper habitasse sociosqu magna taciti
        senectus at. Fermentum quam lacus consectetur consectetur, pulvinar
        nullam. Urna mollis hendrerit; consequat odio vestibulum bibendum. At
        phasellus vel sem scelerisque cursus a aliquet accumsan. Semper
        consequat nullam etiam facilisis ornare.
      </p>
    </div>
  );
};

export default aboutus;

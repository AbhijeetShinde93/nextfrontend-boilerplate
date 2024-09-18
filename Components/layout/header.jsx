import React from "react";
import ImageWrapper from "../imageWrapper/imageWrapper";

export default function Header() {
 return (
  <header className="sticky-top">
   <nav className="navbar header-top navbar-expand-md">
    <div className="container">
     <div className="logo">
      <ImageWrapper
       alt={"megawecare"}
       imageUrl={"/assets/images/megawecare.webp"}
       width="306"
       height="80"
       hasPriority={true}
      />
     </div>
    </div>
   </nav>
  </header>
 );
}

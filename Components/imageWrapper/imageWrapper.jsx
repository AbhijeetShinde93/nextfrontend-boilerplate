"use Client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ImageWrapper({
 imageUrl,
 alt,
 height,
 width,
 hasPriority,
 isUnoptimize,
 srcSet,
}) {
 const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.5,
 });
 return (
  <div ref={ref} className="img-wrapper">
   {srcSet ? (
    <picture>
     <source media="(max-width:767px)" srcSet={srcSet} />
     <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      sizes="100vw"
      quality={100}
      style={{
       opacity: inView ? 1 : 0,
       width: "100%",
       height: "auto",
       maxWidth: "60px!important",
      }}
      {...(hasPriority ? { priority: true } : {})}
      unoptimized={isUnoptimize ? true : false}
     />
    </picture>
   ) : (
    <Image
     src={imageUrl}
     alt={alt}
     height={height}
     width={width}
     sizes="100vw"
     quality={100}
     style={{
      opacity: inView ? 1 : 0,
      width: "100%",
      height: "auto",
     }}
     {...(hasPriority ? { priority: true } : {})}
     unoptimized={isUnoptimize ? true : false}
    />
   )}
  </div>
 );
}

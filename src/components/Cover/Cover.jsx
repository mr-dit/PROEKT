import React, { useEffect, useState } from "react";
import upload from "../../icons/upload.svg";
import styles from "./Cover.module.css";

const Cover = ({ img }) => {
  const [image, setImage] = useState(img);

  useEffect(() => {
    setImage(img);
  }, [img]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const renderImage = () => {
    if (image && !image.includes("undef") && !image.includes("null")) {
      if (image.includes("blob")) {
        return (
          <img
            className={styles.blur}
            src={image}
            alt="uploader"
            style={{ borderRadius: "26px" }}
          />
        );
      } else {
        const serverUrl = process.env.REACT_APP_SERVER_URL;
        return (
          <img
            className={styles.blur}
            src={`${serverUrl}${image}`}
            alt="uploader"
            style={{ borderRadius: "26px" }}
          />
        );
      }
    } else {
      return (
        <>
          <img src={upload} alt="uploader" className={styles.upload} />
          <div className={styles.text}>
            от 305х140 <br />
            <span>.png .jpg .gif</span>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.img_project}>
      Обложка проекта
      <div>
        <label className={styles.inputFile}>
          <input
            type="file"
            name="cover"
            id="cover"
            accept=".jpg, .jpeg, .png, .svg"
            onChange={handleImageChange}
          />
          {renderImage()}
        </label>
      </div>
    </div>
  );
};

export default Cover;

// import React, { useEffect, useState } from 'react'
// import upload from "../../icons/upload.svg";
// import styles from "./Cover.module.css";

// export const Cover = ({img}) => {
//   const [image, setImage] = useState("");
//   const serverUrl = process.env.REACT_APP_SERVER_URL;

//   useEffect(() => {
//     setImage(img)
//   }, [img])

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setImage(imageUrl);
//   };

//   return (
//     <>
//       <div className={styles.img_project}>
//         Обложка проекта
//         <div>
//           <label className={styles.inputFile}>
//             <input type="file" name="cover" id="cover" accept=".jpg, .jpeg, .png, .svg" onChange={handleImageChange} />
//             {
//               image && !image.includes('undef') && !image.includes('null')
//                 ?
//                 image.includes('blob')
//                   ? ( <img className={styles.blur} src={`${image}`} alt="uploader" style={{ borderRadius: "26px" }} /> )
//                   : ( <img className={styles.blur} src={`${serverUrl}${image}`} alt="uploader" style={{ borderRadius: "26px" }} /> )
//                 : (
//                 <>
//                   <img src={upload} alt="uploader" className={styles.upload} />
//                   <div className={styles.text}>
//                     от 305х140{" "}
//                     <React.Fragment>
//                       <br />
//                       <span>.png .jpg .gif</span>
//                     </React.Fragment>
//                   </div>
//                 </>
//               )
//             }
//           </label>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";

import { storage } from "../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import myImage from "../image/whatsapp.jpg";

const TopImg = () => {
  const [imageList, setImageList] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const sliderShowList = [
    imageList.image1,
    imageList.image2,
    imageList.image3,
    imageList.image4,
  ];
  // console.log(sliderShowList.length)

  const [index] = useState(0);
  // const delay = 1000;
  // useEffect(()=> {
  //   const changeImg = ()=> {
  //     setTimeout(() => {
  //       setIndex((prev)=>
  //         prev === sliderShowList.length - 1 ? 0 : prev + 1
  //       )
  //     }, delay);
  //   }
  //   changeImg()
  // },[])

  useEffect(() => {
    const getImage = async () => {
      try {
        setImageList({
          image1: await getDownloadURL(ref(storage, `ads/1`)),
          // image2: await getDownloadURL(ref(storage, `ads/2`)),
          // image3: await getDownloadURL(ref(storage, `ads/3`)),
          // image4: await getDownloadURL(ref(storage, `ads/4`))
        });
      } catch (error) {
        console.log(error);
      }
    };
    getImage();
  }, []);

  return (
    <div className="topImage">
      <img
        style={{ width: "95%", height: "50vh", marginTop: "5px" }}
        src={imageList.image1 !== null ? sliderShowList[index] : myImage}
        alt="myImage"
      />
    </div>
  );
};

export default TopImg;

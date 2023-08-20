import React from "react";
import MainModal from "./MainModal";
import{Input} from "../UsedInputs";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
import { FacebookShareButton, TelegramShareButton, TwitterShareButton } from "react-share";


function ShareMovieModal({modalOpen,setModelOpen,movie}){
    const shareData=[
        {
            icon:FaFacebook,
            shareButton:FacebookShareButton
        },
        {
            icon:FaTwitter,
            shareButton:TwitterShareButton
        },
        {
            icon:FaTelegram,
            shareButton:TelegramShareButton
        }
    ];
    const url ='${windows.location.protocol}//${window.location.host}/movie.name';
    return (

        <MainModal modalOpen={modalOpen} setModalOpen={setModelOpen}>
            <div className="inline-block sm:w4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white ">
             <h2 className="text-2xl">Share <span className="text-xl font-bold">"{movie?.name}"</span></h2>   
              <form className="flex-rows flex-wrap gap-6 mt-6">
             
             {
                shareData.map((data,index) =>(
                    <data.shareButton key={index} url={url} quote="Netflixo | Free Movie Site">
                    <    
                        </data.shareButton>
                )
                )
             }
            
              </form>
            </div>
        </MainModal>
    )

}
export default CategoryModal;

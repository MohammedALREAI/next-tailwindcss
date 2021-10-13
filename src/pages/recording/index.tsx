import { NextPage } from 'next';
import React, { useState } from 'react';
import { BiVideoRecording, BiScreenshot } from 'react-icons/bi';
import { CgPlayStop } from 'react-icons/cg';
import { FcDownload } from 'react-icons/fc';
import { ButtonRecorder } from 'src/components/Button/ButtonRecorder';
import { Player } from 'video-react';
import RecordRTC, { RecordRTCPromisesHandler } from 'recordrtc';
import { saveAs } from 'file-saver';

interface Props {}

const Recording: NextPage = () => {
    //     const [recorder, setRecorder] = useState<RecordRTCPromisesHandler | null>()
    //     const [stream, setStream] = useState<MediaStream | null>()
    //     const [videoBlob, setVideoUrlBlob] = useState<Blob | null>()
    //     const [type, setType] = useState<'video' | 'screen'>('video');
    //     const  [error,setError]=useState<string>('')

    // // //     /*** handle  with  the  start  video*/
    // //     const  startVideo=async ()=>{
    // //         const  deviceMedia=navigator.mediaDevices;
    // //         const  streamType = type==="video"?await deviceMedia.getDisplayMedia({
    // //             video:true,
    // //              audio:true
    // //         }):
    // //         await deviceMedia.getDisplayMedia({
    // //             video:true,
    // //              audio:false
    // //         })

    // //         const  recorder = new RecordRTCPromisesHandler(streamType, {
    // //             type: 'video'
    // //         });
    // //         alert("start")
    // //                 await  recorder.startRecording()
    // //                 setRecorder(recorder)
    // //                 setStream(streamType);
    // //                 setVideoUrlBlob(null)

    // //     }

    // // // /** handle  with  stop  the  recd */
    // // const  stopRecorder= async()=>{
    // // if(!recorder){
    // //     throw  new Error("you  cant  be  stop  if  you  not  start  the  recorder");
    // //     setError("you  cant  be  stop  if  you  not  start  the  recorder")

    // // }
    // //         await recorder.stopRecording();
    // //         const  blob:Blob=await recorder.getBlob();
    // //         (stream as  any).stop();
    // //         setVideoUrlBlob(blob);
    // //             // RESET  THE  DEFAULT  STEREAM  TO NULL

    // //                 setStream(null);
    // //                 setRecorder(null);
    // //                 setError('');
    // // }

    // // // // ///  HANDLE  WITH  SCREENA  SHOUT

    // // const  saveRecorder=()=>{
    // //     if(videoBlob ){
    // //         saveAs(videoBlob, `Video-${Date.now()}.webm`)
    // //                }
    // //     setError("you  cant  be  save if  you  not  start  the  recorder");

    // // }
    // // ///  SCREEN  SHEAT

    // // const  changeType=()=>{
    // //     if(type!=='video'){
    // //         setType('screen')
    // //     }

    // }

    //     // const  toggleAction=()=>type === 'screen' ?
    //     //   <BiVideoRecording onClick={startVideo} className="iconsRecording"/>
    //     //   :<BiScreenshot onClick={stopRecorder} className="iconsRecording"/>

    //     return (
    //         <div className="container  mx-auto my-4  bg-[#f00]">
    //         <h1 className="text-[30] "> </h1>

    //          <div className="flex justify-center items-center w-full h-12 p-6">
    //              <div className="flex w-full justify-center items-center space-x-4 bg-indigo-400 ">
    //                 <ButtonRecorder title={type === 'screen' ? 'Record Screen' : 'Record Video'}
    //                     children={toggleAction} />
    //                 <ButtonRecorder onClick={()=>console.log("test")} title="Screen Shot" children={<BiScreenshot className="iconsRecording"/>} />
    //                 <ButtonRecorder onClick={} title="download  Video" children={<FcDownload className="iconsRecording"/>} />
    //           </div>
    //         {/*
    //                 {!!videoBlob && (
    //                     <Player
    //                     width={700}
    //                     height={700}
    //                     muted={true}
    //                     src={window.URL.createObjectURL(videoBlob)|| ""} />
    //                 )}  */}

    //      </div>

    //         </div>
    return <h1>sdds</h1>;
};

export default Recording;

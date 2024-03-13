import React from "react";

function Categories(){
    var CatList =  [
        {
            imagepath : '/heavyduty.png',
            imageTitle : 'Heavyduty Tiles'
        },
        {
            imagepath : '/scratchfree.png',
            imageTitle : 'Scratch Free'
        },
        {
            imagepath : '/antiskid.png',
            imageTitle : 'Anti Skid Tiles'
        },
        {
            imagepath : '/colored.jpg',
            imageTitle : 'Colored Tiles'
        },
        {
            imagepath : '/roof.png',
            imageTitle : 'Roof Tiles'
        },
        {
            imagepath : '/slab.png',
            imageTitle : 'Slab Tiles'
        },
        
    ]
    return<div>
        <div className="text-5xl text-white text-center pt-16">Discover Tiles Tailored to Your Needs.</div>
    <div className="h-auto bg-black flex justify-center flex-wrap items-center overflow-y-auto mt-12 pb-12">
        {CatList.map((cats)=> (<div className="w-72 object-fit flex justify-center items-center flex-col border-2 border-slate-900 py-4 px-4 rounded-[30px] mr-4 ml-4 mt-4 mb-4 hover:border-slate-600 hover:border-2 duration-100 hover:bg-slate-800 hover:bg-opacity-25">
            <img src={cats.imagepath} alt={cats.imagepath} className="rounded-[20px]"/>
            <div className="text-xl text-white font-semibold py-6">{cats.imageTitle}</div>
        </div>))}
    </div>
    </div>
}

export default Categories;
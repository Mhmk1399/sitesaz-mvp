import React from 'react';

export default function ExplainFooter({ color, textColor, font }: { color: string; textColor: string; font:string }) {
  console.log(font);
  

  const footerSections = [
    {
      title: "About Us",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد"
    },
    {
      title: "Our Services",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد."
    }
  ];

 
  return (
    <footer className={`text-center lg:text-left  `}style={{ backgroundColor: color, color: textColor,fontFamily:font }}>
      <div className="container p-6 ">
        <div className="grid gap-4 text-justify">
          {footerSections.map((section, index) => (
            <div key={index} className="mb-6 md:mb-0">
              <h5 className="mb-2 font-medium uppercase">{section.title}</h5>
              <p className="mb-4">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      
    </footer>
  );
}

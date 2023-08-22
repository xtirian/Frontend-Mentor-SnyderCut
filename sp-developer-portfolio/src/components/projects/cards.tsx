import Image from "next/image";
import * as React from 'react';

//destacar a propriedade hover com before que eu não consegui fazer no css aquela vez e deu pra fazer aqui. no css seria o equivalente a div:hover::before colocar no readme

export default function card(props: {
  src: string;
  project: string;
  code: string;
  title: string;
  children:React.ReactNode
}) {
  return (
    <div>
      <div
        className={`relative w-[540px] h-[487px] flex flex-col items-center justify-center gap-y-[48px] bg-[rgba(0,0,0,0.80)] before:content-[""] before:bg-${props.src} before:inset-1 before:absolute hover:before:z-[-1] `}
      >
        <div className="flex border-b-2 border-b-Green pb-5">
          <a target="_blank"
            href={props.project}
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem]"
          >
            View Project
          </a>
        </div>
        <div className="flex border-b-2 border-b-Green pb-5">
          <a target="_blank"
            href={props.code}
            className="text-White  text-[2rem]/[3.25rem] uppercase tracking-[0.28625rem]"
          >
            View Code
          </a>
        </div>
      </div>
      <h3 className="text-m text-White mb-[7px]">{props.title}</h3>
      <div className="text-body text-Grey flex gap-x-[2.25rem] ">
       {props.children}
      </div>
    </div>
  );
}

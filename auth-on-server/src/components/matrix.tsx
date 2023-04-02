import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

type PropsMatrix = {
    width: number,
    height: number
}

const Matrix = (props: PropsMatrix) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d')
            if (ctx) {
                const cols = Math.floor(props.width / 20) + 1;
                const ypos = Array(cols).fill(0);

                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, props.width, props.height);

                setInterval(() => {
                    ctx.fillStyle = '#0001';
                    ctx.fillRect(0, 0, props.width, props.height);
                    
                    ctx.fillStyle = '#0f0';
                    ctx.font = '15pt monospace';
                    
                    ypos.forEach((y, ind) => {
                        const text = String.fromCharCode(Math.random() * 128);
                        const x = ind * 20;
                        ctx.fillText(text, x, y);
                        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
                        else ypos[ind] = y + 20;
                    });

                }, 50)
                
            }
            
        }
    }, )

    return (
        <>
            <canvas width={props.width} height={props.height} ref={canvasRef}>Canvas couldn't load</canvas>
        </>
    )

}

export default Matrix;
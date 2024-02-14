import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Di si por favor",
    img: "https://i.pinimg.com/originals/40/99/a6/4099a64d4819ba8c7ac7c95687947a4a.gif"
  },
  {
    id: 1,
    description: "Piénsalo de nuevo.",
    img: "https://i.pinimg.com/originals/50/d0/bc/50d0bce51f01a8cfd786f06bd108bc33.gif"
  }
    ,
  {
    id: 2,
    description: "Vamos, atrévete a decir que sí.",
    img: "https://i.pinimg.com/originals/ca/a4/a6/caa4a69818428c5535e362e8d482c59f.gif"
  },
  {
    id: 3,
    description: "No, ni un poquito :P",
    img: "https://i.pinimg.com/originals/94/42/5c/94425ce994f3608d7393b337bf08335e.gif"
  },
  {
    id: 4,
    description: "Di sí, confía en mí, será divertido.",
    img: "https://i.pinimg.com/originals/df/90/4e/df904e08ce53360d1d2b831def2ff8e7.gif"
  },
  {
    id: 5,
    description: "Di que sí nuestro amor es como una dulce melodía.",
    img: "https://i.pinimg.com/originals/c6/0f/fe/c60ffe2db48f9ec653a885923ae22817.gif"
  },
  {
    id: 6,
    description: "Te prometo que será inolvidable.",
    img: "https://i.pinimg.com/564x/78/9a/93/789a9367f23786090bd1cabf67c3cd2f.jpg"
  },
  {
    id: 7,
    description: "Eso no dice piensa tu corazón.",
    img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
  },
  {
    id: 8,
    description: "Di que sí, por favor. Contigo, cada día es especial.",
    img: "https://i.pinimg.com/originals/48/df/d3/48dfd30f252f51fed4d82b639c746459.gif"
  },
  {
    id: 9,
    description: "No te arrepentirás.",
    img: "https://i.pinimg.com/originals/6e/ce/c1/6ecec1297a0acb610cfa8f5045ab92b5.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 30)
    }
    setRandomValor(random[index]);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Feliz San Valentin puerquita :3, me extrañas?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://i.pinimg.com/originals/df/90/4e/df904e08ce53360d1d2b831def2ff8e7.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="flex justify-center items-center flex-wrap gap-3">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['😍', '🥰', '❤️', '😘'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{width:agrandar, height: agrandar,fontSize: agrandar-20+'px' }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="px-4 text-5xl text-white text-center font-bold">Sabia que me extrañas un montón ❤️!</h1>
            <img src="https://i.pinimg.com/originals/2a/af/1d/2aaf1d299abd3b313765c09dee3f5a04.gif" alt="" className="mx-auto" />
            
          </div>
        )
      }
    </main>
  )
}

export default App

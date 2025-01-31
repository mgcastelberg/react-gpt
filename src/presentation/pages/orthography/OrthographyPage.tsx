import { useState } from "react"
import { GptMessage, MyMessage, TextMessageBox, TextMessageBoxFile, TypingLoader } from "../../components"

interface Message {
  text: string;
  isGPT: boolean;
}

export const OrthographyPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGPT: false }]);

    // ToDo: UseCase
    setIsLoading(false);

    // ToDo: Añadir el mensaje de GPT en true

  }

  return (
    <div className="chat-container">

        <h1>OrthographyPage</h1>
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">
            
            {/* Bienvenida */}
            <GptMessage text="Bienvenido a la ortografía de ReactGPT. En esta sección puedes corregir ortografía y mejorar la ortografía de tus textos. ¡Prueba con tu propio texto!" />

            {
              messages.map((message, index) => (
                message.isGPT 
                  ? (<GptMessage key={index} text="Esto es de OpenIA" />) 
                  : (<MyMessage key={index} text={message.text} />)
              ))
            }


            {/* <MyMessage text="Esto es un ejemplo de texto para probar la ortografía." /> */}

            {/* Cargando ... */}
            {
              isLoading && (
                <div className="col-start-1 col-end-12 fade-in">
                  <TypingLoader />
                </div>
              )
            }

          </div>
        </div>

        {/* <TextMessageBox
              onSendMessage={ handlePost }
              placeholder="Escribe tu texto aquí..."
              disableCorrections={true}
        /> */}

        <TextMessageBoxFile
              onSendMessage={ handlePost }
              placeholder="Escribe tu texto aquí..."
        />

    </div>
  )
}

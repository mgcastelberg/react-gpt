import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from "../../components"

export const OrthographyPage = () => {
  return (
    <div className="chat-container">

        <h1>OrthographyPage</h1>
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">
            
            {/* Bienvenida */}
            <GptMessage text="Bienvenido a la ortografía de ReactGPT. En esta sección puedes corregir ortografía y mejorar la ortografía de tus textos. ¡Prueba con tu propio texto!" />

            <MyMessage text="Esto es un ejemplo de texto para probar la ortografía." />

            {/* Cargando ... */}
            <TypingLoader className="fade-in"/>

          </div>
        </div>

        <TextMessageBox
              onSendMessage={ (message: string) => console.log(message) }
              placeholder="Escribe tu texto aquí..."
              disableCorrections={true}
        />

    </div>
  )
}

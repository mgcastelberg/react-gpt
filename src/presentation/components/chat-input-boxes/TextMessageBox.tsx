import { FormEvent, useState } from "react";


interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
}

export const TextMessageBox = ({ onSendMessage, placeholder="" , disableCorrections = false}:Props) => {

    const [message, setMessage] = useState('');
  
    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (message.trim().length === 0 ) return;

        console.log('handleSendMessage');

        onSendMessage(message);
        setMessage('');
    };
  
    return (

        <form 
            onSubmit={ handleSendMessage }
            className="flex flex-row items-center h-16 rounded-xl bg-gray-200 w-full px-3 py-3"
        >
            <div className="flex-grow">
                <div className="relative w-full">

                    <input 
                        type="text"
                        autoFocus
                        name="message"
                        className="flex w-full border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent text-gray-900 placeholder-gray-500 pl-7 h-10 bg-gray-200"
                        placeholder={ placeholder }
                        autoComplete={disableCorrections ? "on" : "off"}
                        autoCorrect={disableCorrections ? "on" : "off"}
                        spellCheck={disableCorrections ? "true" : "false"}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                </div>
            </div>

            <div className="ml-4"></div>
                <button 
                    type="submit"
                    className="btn-primary"
                >
                    <span className="mr-2">Enviar</span>
                    <i className="fa-regular fa-paper-plane"></i>
                </button>
        </form>
    
  )
}

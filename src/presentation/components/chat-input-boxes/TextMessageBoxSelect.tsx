import { FormEvent, useState } from "react";


interface Props {
    onSendMessage: (message: string, selectedOption?: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
    options: Option[];
}

interface Option {
    id: string;
    text: string;
}

export const TextMessageBoxSelect = ({ onSendMessage, placeholder="" , disableCorrections = false, options}:Props) => {

    const [message, setMessage] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>('');
  
    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (message.trim().length === 0 ) return;

        console.log('handleSendMessage');

        onSendMessage(message, selectedOption);
        setMessage('');
    };
  
    return (

        <form 
            onSubmit={ handleSendMessage }
            className="flex flex-row items-center h-16 rounded-xl bg-gray-200 w-full px-3 py-3"
        >
            <div className="flex-grow">
                <div className="flex">

                    <input 
                        type="text"
                        autoFocus
                        name="message"
                        className="w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent text-gray-900 placeholder-gray-500 pl-7 h-10 bg-gray-200"
                        placeholder={ placeholder }
                        autoComplete={disableCorrections ? "on" : "off"}
                        autoCorrect={disableCorrections ? "on" : "off"}
                        spellCheck={disableCorrections ? "true" : "false"}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <select 
                        name="select"
                        className=" w-2/5 ml-5 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="">Seleccionar opcion</option>
                        {
                            options.map( ({id, text}) => ( 
                                <option key={id} value={id}>{text}</option>
                            ))
                        }

                    </select>

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

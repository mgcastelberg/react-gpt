
interface Props {
  text: string;
}

export const MyMessage = ({ text }:Props) => {
    return (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex flex-row-reverse items-center justify-start">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full">
                    M
                </div>
                <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-700 shadow rounded-xl">
                    <div>{ text }</div>
                </div>
            </div>
        </div>
    );
}

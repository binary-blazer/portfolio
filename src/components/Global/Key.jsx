export default function Key({ keys, ...props }) {
    return <>
        <div className="bg-gray-600/5 text-zinc-400 transition-all px-2 py-1 flex items-center justify-center duration-200 gap-2 rounded-lg text-xs">
            {keys.map((keya, index) =>
                <span key={index} {...props}>
                    {keya}
                </span>
            ).reduce((prev, curr) => [prev, <span key={1}>+</span>, curr])}
        </div>
    </>
}
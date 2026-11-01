export default function DivRework({ children }: { children: React.ReactNode }) {
    return (
         <div className="flex flex-col mt-6 flex gap-4 border-2 border-gray-700 p-6">
            {children}
         </div>
    )
}
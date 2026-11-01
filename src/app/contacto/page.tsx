export default function Contacto() {
    return (
        <main>
            <div className="flex flex-col items-center justify-center gap-4 py-20">
                <h1 className="text-3xl font-bold">Contacto</h1>
                <p className="text-lg text-gray-400">
                    For inquiries, support, or feedback regarding Slim Executor, please reach out to us at:
                </p>
                <p className="text-gray-400">
                    Email: <a href="mailto:contact@slimexecutor.com">contact@slimexecutor.com</a>
                </p>
            </div>
        </main>
    );
}
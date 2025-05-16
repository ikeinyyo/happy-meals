export default function Recipes() {
    return (
        <div className="flex h-screen">
            <div className="w-1/5 h-full bg-background p-4">
                <h2 className="text-xl font-bold mb-4">Recetas</h2>
            </div>

            <div className="w-4/5 h-full overflow-y-auto bg-background-secondary p-4">
                <h1 className="text-2xl font-bold mb-4">Contenido Principal</h1>
            </div>
        </div>
    );
}

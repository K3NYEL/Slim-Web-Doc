import { siteConfig } from "../config/site";

export type DocSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
  note?: string;
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  sections: DocSection[];
};

export const docPages: DocPage[] = [
  {
    slug: "installation",
    title: "Instalación",
    description: "Instala Slim Executor en Windows y prepara el entorno para ejecutar scripts Lua.",
    sections: [
      { id: "requirements", title: "Requisitos", paragraphs: ["Slim Executor es una aplicación de escritorio para Windows. Usa una instalación actual de Windows y descarga el instalador únicamente desde el repositorio oficial."], bullets: ["Windows 10 o Windows 11 de 64 bits.", "Instalador oficial Slim Executor Setup.", "Conexión a Internet para descargar releases y consultar actualizaciones."] },
      { id: "download", title: "Descarga", paragraphs: ["Abre el repositorio público oficial y elige la release estable más reciente. Descarga el instalador Setup de Windows x64 y evita mirrors no oficiales."], bullets: ["Releases oficiales: " + `${siteConfig.repositoryUrl}/releases`, "Conserva el nombre del archivo hasta terminar la descarga.", "Lee las notas de la release antes de instalar."] },
      { id: "install", title: "Instalar y abrir", paragraphs: ["Ejecuta el instalador y sigue sus pasos. Cuando termine, abre Slim Executor desde el acceso directo o la entrada de aplicaciones instalada."] },
      { id: "updates", title: "Actualizaciones", paragraphs: ["La comprobación de actualizaciones es iniciada por el usuario. Revisa la versión ofrecida y sus notas antes de descargar o instalarla."] },
    ],
  },
  {
    slug: "quick-start",
    title: "Primeros pasos",
    description: "Abre un script Lua, ejecútalo y crea tu primera ventana Qt desde Slim Executor.",
    sections: [
      { id: "workflow", title: "Modelo de ejecución", paragraphs: ["Slim Executor ejecuta scripts Lua dentro de una aplicación de escritorio. Un script puede ser una expresión sencilla, un programa con salida de consola o una interfaz interactiva con ventanas, canvas y eventos."], bullets: ["Abre o crea un archivo con extensión .lua.", "Escribe el código y guárdalo.", "Ejecuta el script y observa la consola para mensajes, valores devueltos y errores.", "Para una interfaz, crea una ventana con ui.window(...) y termina con window:show()."] },
      { id: "expression", title: "Expresión frente a script", paragraphs: ["El runtime acepta expresiones directas y también instrucciones completas. Si el código falla al compilar o durante la ejecución, el error se comunica a la consola."], code: "-- Expresión sencilla\n2 + 3\n\n-- Script con salida explícita\nlocal total = 2 + 3\nprint(\"Total:\", total)" },
      { id: "first-window", title: "Primera ventana Qt", paragraphs: ["Las funciones de interfaz requieren que el proveedor Qt esté conectado. En la aplicación de escritorio compatible, usa ui.window para crear la ventana y window:show() para mostrarla."], code: 'local window = ui.window("Mi primera ventana")\nwindow:label("Esta interfaz fue creada desde Lua.")\nwindow:show()' },
    ],
  },
  {
    slug: "lua-runtime",
    title: "Lua esencial",
    description: "Variables, funciones, tablas, conversiones y bibliotecas disponibles en el runtime Lua.",
    sections: [
      { id: "values", title: "Variables y tipos", paragraphs: ["Usa local para declarar variables. Lua maneja números, cadenas, booleanos, tablas y nil. Los valores de varios controles Qt llegan como texto, por lo que normalmente debes convertirlos con tonumber."], code: 'local player = "Nova"\nlocal speed = 220\nlocal enabled = true\nlocal missing = nil\nprint(player, speed, enabled)' },
      { id: "conditions", title: "Condiciones y ciclos", paragraphs: ["Los bloques se cierran con end. Mantén ligeros los ciclos y funciones que se ejecutan en cada actualización para no bloquear la interfaz."], code: 'local score = 75\nif score >= 60 then\n    print("Aprobado")\nelse\n    print("Sigue practicando")\nend\n\nfor i = 1, 3 do\n    print("Vuelta", i)\nend' },
      { id: "functions", title: "Funciones propias", paragraphs: ["Una función reutiliza una operación, recibe parámetros y devuelve valores mediante return. Los callbacks de botones y temporizadores son funciones invocadas posteriormente por la aplicación."], code: 'local function greet(name)\n    return "Hola, " .. name\nend\nprint(greet("Nova"))' },
      { id: "libraries", title: "Bibliotecas estándar", paragraphs: ["El runtime abre las bibliotecas base de Lua, coroutine, math, string, table, utf8 y package. Esto no equivale a una sandbox de seguridad: ejecuta únicamente scripts en los que confíes y no presupongas APIs de red o filesystem genéricas."] },
    ],
  },
  {
    slug: "ui-controls",
    title: "Ventanas y controles Qt",
    description: "Crea ventanas Qt desde Lua y usa etiquetas, entradas, casillas, sliders, selectores y colores.",
    sections: [
      { id: "window", title: "Crear una ventana", paragraphs: ["ui.window(title) crea una ventana y devuelve un objeto UiWindow. Los controles se añaden con métodos usando la sintaxis de dos puntos. La ventana se muestra con window:show()."], code: 'local window = ui.window("Perfil")\nlocal name = window:input("Nombre", "Nova")\nlocal status = window:label("Hola, Nova")\nwindow:show()' },
      { id: "controls", title: "Controles disponibles", paragraphs: ["Los métodos documentados por los ejemplos oficiales son:"], bullets: ["window:label(text) — etiqueta.", "window:input(label, initial) — entrada de una línea.", "window:textarea(label, initial) — texto multilínea.", "window:password(label, initial) — entrada oculta.", "window:checkbox(label, checked) — casilla.", "window:slider(label, min, max, value) — deslizador.", "window:select(label, options, selected) — selector.", "window:color_picker(label, initial) — selector de color."] },
      { id: "values", title: "Leer y cambiar valores", paragraphs: ["Los controles devueltos exponen value() para leer el valor actual, set_value(text) para asignarlo y set_text(text) para actualizar el texto visible. Convierte los valores numéricos con tonumber y verifica nil."], code: 'local speed = window:slider("Velocidad", 1, 100, 25)\nwindow:button("Mostrar", function()\n    local n = tonumber(speed:value()) or 0\n    status:set_text("Velocidad: " .. n)\nend)' },
    ],
  },
  {
    slug: "windows",
    title: "Botones y callbacks",
    description: "Responde a clics, comparte estado entre callbacks y actualiza controles Qt.",
    sections: [
      { id: "buttons", title: "Crear botones", paragraphs: ["window:button(text, callback) añade un botón. El callback no se ejecuta al definirlo: Slim Executor lo invoca cuando el usuario pulsa el botón."], code: 'local window = ui.window("Acciones")\nlocal status = window:label("Esperando acción")\nwindow:button("Saludar", function()\n    status:set_text("¡Hola!")\nend)\nwindow:show()' },
      { id: "state", title: "Estado compartido", paragraphs: ["Una función definida en el mismo ámbito puede capturar variables locales. Este patrón permite actualizar una etiqueta o leer una entrada sin variables globales."], code: 'local count = 0\nlocal window = ui.window("Contador")\nlocal label = window:label("Clics: 0")\nwindow:button("Sumar", function()\n    count = count + 1\n    label:set_text("Clics: " .. count)\nend)\nwindow:show()' },
      { id: "errors", title: "Errores en callbacks", paragraphs: ["Los callbacks se ejecutan como funciones protegidas. Si ocurre un error Lua, revisa la consola o el área de errores y valida las entradas antes de calcular."] },
    ],
  },
  {
    slug: "canvas-events",
    title: "Canvas y eventos",
    description: "Dibuja formas 2D y responde a teclado y ratón desde un UiCanvas.",
    sections: [
      { id: "drawing", title: "Dibujo 2D", paragraphs: ["window:canvas(width, height) crea una superficie UiCanvas. El origen está en la esquina superior izquierda; x crece a la derecha e y hacia abajo. Los colores usan cadenas Qt como #RRGGBB."], bullets: ["clear(color) — limpia el canvas.", "circle(x, y, radius, color) — dibuja un círculo.", "line(x1, y1, x2, y2, color, width) — dibuja una línea.", "rect(x, y, width, height, color) — dibuja un rectángulo."], code: 'local window = ui.window("Canvas básico")\nlocal canvas = window:canvas(480, 260)\ncanvas:clear("#10131A")\ncanvas:line(0, 130, 480, 130, "#657080", 2)\ncanvas:rect(30, 30, 100, 60, "#875050")\ncanvas:circle(240, 130, 28, "#38BDF8")\nwindow:show()' },
      { id: "keyboard", title: "Teclado", paragraphs: ["canvas:on_key(callback) registra un callback con key y pressed. Guarda el estado en una tabla si necesitas mantener el movimiento mientras una tecla está presionada."], code: 'local keys = {}\ncanvas:on_key(function(key, pressed)\n    keys[key] = pressed\nend)' },
      { id: "mouse", title: "Ratón", paragraphs: ["canvas:on_mouse(callback) recibe event, x, y, button y wheel. Los eventos documentados son move, press, release y wheel; los botones son 1 izquierdo, 2 derecho y 3 central."], code: 'canvas:on_mouse(function(event, x, y, button, wheel)\n    if event == "press" and button == 1 then\n        markerX, markerY = x, y\n    end\nend)' },
    ],
  },
  {
    slug: "timers",
    title: "Temporizadores y animación",
    description: "Actualiza el estado usando dt en segundos y controla el ciclo de vida de un UiTimer.",
    sections: [
      { id: "create", title: "Crear un temporizador", paragraphs: ["window:timer(interval_ms, callback) crea un UiTimer. El intervalo está en milisegundos y el callback recibe elapsedSeconds, normalmente usado como dt en segundos."], code: 'local window = ui.window("Animación")\nlocal canvas = window:canvas(400, 220)\nlocal x = 30\nlocal speed = 100\nlocal timer = window:timer(16, function(dt)\n    x = x + speed * dt\n    if x > 370 then x = 30 end\n    canvas:clear("#10131A")\n    canvas:circle(x, 110, 18, "#38BDF8")\nend)\nwindow:show()\ntimer:start()' },
      { id: "lifecycle", title: "Controlar el ciclo", paragraphs: ["Los métodos start(), stop(), pause(), resume() e is_running() controlan y consultan el temporizador. Los ejemplos usan 16 ms, aproximadamente 60 actualizaciones por segundo, pero no es una garantía de FPS."], code: 'window:button("Pausar", function() timer:pause() end)\nwindow:button("Reanudar", function() timer:resume() end)\nwindow:button("Detener", function() timer:stop() end)' },
      { id: "dt", title: "Por qué usar dt", paragraphs: ["Multiplica la velocidad por el tiempo transcurrido para que el movimiento dependa aproximadamente del tiempo real y no de la cantidad de llamadas. Evita bucles infinitos dentro de callbacks."] },
    ],
  },
  {
    slug: "storage-media",
    title: "Almacenamiento, archivos y audio",
    description: "Guarda preferencias, abre diálogos de archivos, muestra mensajes y reproduce audio.",
    sections: [
      { id: "storage", title: "Guardar y cargar texto", paragraphs: ["window:save(key, value) y window:load(key) guardan y recuperan texto en los ajustes de la aplicación. Son adecuados para preferencias pequeñas."], code: 'window:button("Guardar", function()\n    window:save("pilot_name", name:value())\nend)\nwindow:button("Cargar", function()\n    name:set_value(window:load("pilot_name"))\nend)' },
      { id: "files", title: "Diálogos de archivos", paragraphs: ["window:open_file(filter) abre un diálogo y devuelve una ruta. window:save_file(filter) permite elegir una ruta de destino. Comprueba si la ruta está vacía cuando el usuario cancela."], code: 'local path = window:open_file("Audio (*.wav *.mp3 *.ogg)")\nif path ~= "" then\n    window:play_music(path, true)\nend' },
      { id: "messages-audio", title: "Mensajes y audio", paragraphs: ["window:message(title, text) muestra un mensaje. Las funciones play_sound(path), play_music(path, loop) y stop_music() controlan el audio. El resultado depende de los formatos admitidos por Qt Multimedia."] },
    ],
  },
  {
    slug: "examples",
    title: "Ejemplos completos",
    description: "Ejemplos oficiales de calculadora Qt y animación 2D en canvas.",
    sections: [
      { id: "calculator", title: "Calculadora Qt", paragraphs: ["Este ejemplo crea dos entradas, una etiqueta y botones para cuatro operaciones. Convierte con tonumber y evita la división entre cero."], code: 'local window = ui.window("Lua Calculator")\nlocal firstInput = window:input("Primer número", "12")\nlocal secondInput = window:input("Segundo número", "8")\nlocal resultLabel = window:label("Resultado: listo")\nlocal function calculate(operation)\n    local a = tonumber(firstInput:value())\n    local b = tonumber(secondInput:value())\n    if a == nil or b == nil then\n        resultLabel:set_text("Escribe números válidos")\n        return\n    end\n    if operation == "add" then\n        resultLabel:set_text("Resultado: " .. add(a, b))\n    elseif operation == "divide" and b == 0 then\n        resultLabel:set_text("No se puede dividir entre cero")\n    end\nend\nwindow:button("Sumar", function() calculate("add") end)\nwindow:show()' },
      { id: "animation", title: "Animación en canvas", paragraphs: ["Mantén un estado, actualízalo desde un temporizador y vuelve a dibujar. Después puedes añadir controles de velocidad, color y eventos de teclado o ratón."], code: 'local x, y = 80, 120\nlocal vx, vy = 150, 110\nlocal timer = window:timer(16, function(dt)\n    x = x + vx * dt\n    y = y + vy * dt\n    draw()\nend)\ntimer:start()' },
    ],
  },
  {
    slug: "gamepad-export",
    title: "Mandos y exportación",
    description: "Lee el estado de un gamepad y exporta el espacio Scripts como un archivo ZIP.",
    sections: [
      { id: "gamepad", title: "Leer un mando", paragraphs: ["window:gamepad(index) lee el estado del mando en el índice solicitado. En los ejemplos se usa el índice 0. Si no hay estado disponible devuelve nil; si existe, devuelve una tabla numérica."], code: 'local pad = window:gamepad(0)\nif pad then\n    local axisX = pad[1] or 0\n    local axisY = pad[2] or 0\n    x = x + axisX * speed * dt\n    y = y - axisY * speed * dt\nend' },
      { id: "export", title: "Exportar el proyecto", paragraphs: ["window:export_project(zip_path) empaqueta el espacio de trabajo Scripts en la ruta indicada. No compila un ejecutable independiente ni empaqueta automáticamente dependencias externas."], code: 'local path = window:save_file("ZIP archive (*.zip)")\nif path ~= "" then\n    window:export_project(path)\n    window:message("Exportación", "Se solicitó exportar el espacio Scripts.")\nend' },
    ],
  },
  {
    slug: "3d-preview",
    title: "Vista previa 3D",
    description: "Experimenta con una caja 3D usando gfx3d.drawBox, update(dt) y draw().",
    sections: [
      { id: "open", title: "Abrir la vista previa", paragraphs: ["Abre View > Open 3D engine preview..., carga examples/lua_3d_preview.lua y ejecuta el script. La vista previa es experimental y no es un motor de videojuegos completo."], bullets: ["Solo se admite una caja por frame en el puente actual.", "No hay modelos, esferas, materiales generales, física ni colisiones.", "La cámara orbital pertenece a la vista previa y Lua no expone sus controles."] },
      { id: "box", title: "Dibujar una caja", paragraphs: ["gfx3d.drawBox(x, y, z, sx, sy, sz, rx, ry, rz, color) recibe posición, escala, rotación en grados y un color Qt."], code: 'local time = 0\nfunction update(dt)\n    time = time + dt\nend\nfunction draw()\n    local x = math.sin(time) * 1.5\n    local rotation = (time * 60) % 360\n    gfx3d.drawBox(x, 0, 0, 1, 1, 1, 15, rotation, 0, "#38BDF8")\nend' },
      { id: "limits", title: "Límites actuales", paragraphs: ["gfx3d.drawGrid() existe, pero actualmente no hace nada porque la cuadrícula ya forma parte de la vista previa. No documentes createModel(), addLight() o createCamera(): no están implementadas en el puente actual."] },
    ],
  },
  {
    slug: "api-reference",
    title: "Referencia rápida de API",
    description: "Firmas y callbacks Lua documentados por el manual oficial de Slim Executor.",
    sections: [
      { id: "globals", title: "Funciones globales", paragraphs: ["print(...) y log(...) escriben valores en la salida capturada. add(a, b) devuelve la suma y prompt(message) solicita texto, aunque puede devolver nil."], bullets: ["print(...) / log(...)", "add(a, b)", "prompt(message)", "ui.window(title)"] },
      { id: "window", title: "Métodos de ventana", paragraphs: ["La superficie documentada incluye controles, canvas, temporizadores, almacenamiento, diálogos, mensajes, audio, gamepad y exportación."], bullets: ["window:label(text)", "window:input(label, initial)", "window:textarea(label, initial)", "window:password(label, initial)", "window:checkbox(label, checked)", "window:slider(label, min, max, value)", "window:select(label, options, selected)", "window:color_picker(label, initial)", "window:button(text, callback)", "window:canvas(width, height)", "window:timer(ms, callback)", "window:show()", "window:save(key, value) / window:load(key)", "window:open_file(filter) / window:save_file(filter)", "window:message(title, text)", "window:gamepad(index)", "window:export_project(zip_path)"] },
      { id: "callbacks", title: "Callbacks", paragraphs: ["Los callbacks documentados reciben los siguientes argumentos:"], bullets: ["Botón: ninguno.", "Canvas on_key: key, pressed.", "Canvas on_mouse: event, x, y, button, wheel.", "Timer: elapsedSeconds.", "3D update: dt.", "3D draw: ninguno."] },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Errores y límites conocidos",
    description: "Diagnostica problemas comunes y diferencias entre versiones del runtime.",
    sections: [
      { id: "common", title: "Problemas frecuentes", paragraphs: ["Si ui.window no crea una ventana, verifica que el proveedor Qt esté conectado. Si una operación numérica falla, recuerda que value() puede devolver texto. Si el canvas queda vacío, prueba clear y circle directamente y confirma que el temporizador se inició."], bullets: ["Animación demasiado rápida: usa dt en segundos.", "Audio sin sonido: verifica ruta, archivo y formato soportado.", "Vista 3D sin varios objetos: el puente actual admite una caja por frame.", "drawGrid() no cambia la cuadrícula: es un no-op en la versión actual."] },
      { id: "debugging", title: "Cómo depurar", paragraphs: ["Reduce el script a un caso mínimo, añade print o log antes y después de la instrucción problemática, comprueba los nombres exactos y valida entradas de usuario. Evita operaciones costosas y ciclos que no terminan en callbacks y temporizadores."] },
      { id: "compatibility", title: "Compatibilidad entre versiones", paragraphs: ["Esta API se basa en el código y ejemplos de la rama main del repositorio Slim_Executor. Una versión instalada anterior puede no incluir todas las funciones. Compara la versión instalada con la versión del código que estás documentando."], note: "Fuente oficial: repositorio público K3NYEL/Slim_Executor, especialmente src/lua_runtime.cpp, docs/lua-3d-preview.md y la carpeta examples." },
    ],
  },
];

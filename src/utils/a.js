
// import { addKeyword, EVENTS } from '@builderbot/bot';
// import User from '../models/user.js'; 

// // --------------------------------------------------
// // CONFIG
// // --------------------------------------------------
// const SILENCE_MINUTES = 10;

// // --------------------------------------------------
// // VIDEOS (Cloudinary)
// // --------------------------------------------------
// const demoVideos = {
//   barberia:
//     'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante:
//     'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   atencion:
//     'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4'
// };

// // --------------------------------------------------
// // MENÚS
// // --------------------------------------------------
// const mainMenuWithGreeting = (nombre) =>
//   `👋 Hola ${nombre}!\n` +
//   `Qué bueno verte de nuevo 😊\n\n` +
//   `¿En qué puedo ayudarte?\n\n` +
//   `1️⃣ Quiero un bot para mi negocio\n` +
//   `2️⃣ Ver ejemplos de bots\n` +
//   `3️⃣ Precios y planes\n` +
//   `4️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `5️⃣ Hablar con una persona\n\n` +
//   `— Opciones adicionales —\n` +
//   `x) Salir`;

// const mainMenuText = (nombre) =>
//   `Perfecto ${nombre} 😊\n` +
//   `¿En qué puedo ayudarte?\n\n` +
//   `1️⃣ Quiero un bot para mi negocio\n` +
//   `2️⃣ Ver ejemplos de bots\n` +
//   `3️⃣ Precios y planes\n` +
//   `4️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `5️⃣ Hablar con una persona\n\n` +
//   `— Opciones adicionales —\n` +
//   `x) Salir`;

// const returnMenuText =
//   `Perfecto 👍\n` +
//   `Volvemos al menú. ¿Qué te gustaría hacer?\n\n` +
//   `1️⃣ Quiero un bot para mi negocio\n` +
//   `2️⃣ Ver ejemplos de bots\n` +
//   `3️⃣ Precios y planes\n` +
//   `4️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `5️⃣ Hablar con una persona\n\n` +
//   `— Opciones adicionales —\n` +
//   `x) Salir`;

// const goodbyeText =
//   `👋 Perfecto\n` +
//   `Cuando quieras, volvés a escribir.\n` +
//   `¡Que tengas un excelente día!`;

// // --------------------------------------------------
// // TEXTO: CÓMO AYUDA
// // --------------------------------------------------
// const howBotHelps_1 =
//   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
//   `Hoy, entrar a un sitio web implica cargar la página,\n` +
//   `buscar un formulario, completar datos y muchas veces\n` +
//   `crear una cuenta o loguearse.\n\n` +
//   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
//   `Con un bot en WhatsApp eso no pasa.\n` +
//   `El cliente ya está logueado, ya confía en la app\n` +
//   `y ya sabe usarla.\n\n` +
//   `Solo escribe y obtiene respuesta inmediata.`;

// const howBotHelps_2 =
//   `✔ Responde consultas al instante,\n` +
//   `   incluso de noche o fines de semana\n\n` +
//   `✔ Evita perder clientes por respuestas tardías\n\n` +
//   `✔ Atiende preguntas repetitivas\n` +
//   `   sin intervención humana\n\n` +
//   `✔ Funciona 24/7,\n` +
//   `   sin que estés pegado al teléfono`;

// const howBotHelps_3 =
//   `📲 WhatsApp ya está en el teléfono del cliente.\n\n` +
//   `— Opciones adicionales —\n` +
//   `a) Volver al menú\n` +
//   `x) Salir`;

// // --------------------------------------------------
// // FLOW
// // --------------------------------------------------
// const welcomeFlow = addKeyword(EVENTS.WELCOME).addAction(
//   async (ctx, ctxFn) => {
//     const state = (await ctxFn.state.getMyState()) || {};
//     const input = ctx.body?.trim().toLowerCase();
//     const telefono = ctx.from;

//     let user = await User.findOneAndUpdate(
//       { telefono },
//       {
//         telefono,
//         lastInteractionAt: new Date(),
//         inactivityStep: 0
//       },
//       { upsert: true, new: true }
//     );

//     // --------------------------------------------------
//     // SILENCIO POST-CIERRE
//     // --------------------------------------------------
//     if (user.conversationClosed) {
//       const minutesPassed =
//         (Date.now() - new Date(user.conversationClosedAt)) / 60000;

//       if (minutesPassed < SILENCE_MINUTES) return;

//       user.conversationClosed = false;
//       user.conversationClosedAt = null;
//       user.inactivityStep = 0;
//       await user.save();

//       await ctxFn.state.update({
//         step: 'menuPrincipal',
//         nombre: user.nombre
//       });

//       return ctxFn.endFlow(mainMenuWithGreeting(user.nombre));
//     }

//     // --------------------------------------------------
//     // INICIO
//     // --------------------------------------------------
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });

//         await ctxFn.flowDynamic([
//           {
//             body:
//               `Hola 👋\n` +
//               `Soy el bot de Megadev.\n` +
//               `Estoy acá para ayudarte con información, servicios y consultas de forma rápida y simple.`
//           },
//           { body: `Antes de empezar, ¿cómo te llamás?` }
//         ]);
//         return;
//       }

//       await ctxFn.state.update({
//         step: 'menuPrincipal',
//         nombre: user.nombre
//       });

//       return ctxFn.endFlow(mainMenuWithGreeting(user.nombre));
//     }

//     // --------------------------------------------------
//     // PEDIR NOMBRE
//     // --------------------------------------------------
//     if (state.step === 'pedirNombre') {
//       const nombre = ctx.body?.trim();

//       await User.updateOne(
//         { telefono },
//         { nombre }
//       );

//       await ctxFn.state.update({
//         step: 'menuPrincipal',
//         nombre
//       });

//       return ctxFn.endFlow(mainMenuText(nombre));
//     }

//     // --------------------------------------------------
//     // MENÚ PRINCIPAL
//     // --------------------------------------------------
//     if (state.step === 'menuPrincipal') {
//       if (input === '2') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
//         return ctxFn.endFlow(
//           `🤖 *Ejemplos de bots*\n\n` +
//             `1️⃣ Bot de barbería (turnos)\n` +
//             `2️⃣ Bot de restaurante (pedidos)\n` +
//             `3️⃣ Bot de atención automática\n\n` +
//             `— Opciones adicionales —\n` +
//             `a) Volver\n` +
//             `x) Salir`
//         );
//       }

//       if (input === '4') {
//         await ctxFn.state.update({ step: 'comoAyuda' });
//         await ctxFn.flowDynamic([
//           { body: howBotHelps_1 },
//           { body: howBotHelps_2 },
//           { body: howBotHelps_3 }
//         ]);
//         return;
//       }

//       if (input === 'x') {
//         await User.updateOne(
//           { telefono },
//           {
//             conversationClosed: true,
//             conversationClosedAt: new Date(),
//             inactivityStep: 2
//           }
//         );
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//       }

//       return ctxFn.endFlow(
//         `❌ Opción inválida.\n\n${mainMenuText(state.nombre)}`
//       );
//     }

//     // --------------------------------------------------
//     // CÓMO AYUDA
//     // --------------------------------------------------
//     if (state.step === 'comoAyuda') {
//       if (input === 'a') {
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return ctxFn.endFlow(returnMenuText);
//       }

//       if (input === 'x') {
//         await User.updateOne(
//           { telefono },
//           {
//             conversationClosed: true,
//             conversationClosedAt: new Date(),
//             inactivityStep: 2
//           }
//         );
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//       }

//       return ctxFn.endFlow('❌ Opción inválida.');
//     }

//     // --------------------------------------------------
//     // VER EJEMPLOS
//     // --------------------------------------------------
//     if (state.step === 'verEjemplos') {
//       if (input === '1') {
//         await ctxFn.flowDynamic([
//           {
//             body:
//               `💈 *Bot para barbería*\n\n` +
//               `✔ Turnos automáticos\n` +
//               `✔ Cancelaciones\n` +
//               `✔ Confirmaciones por WhatsApp`
//           },
//           { media: demoVideos.barberia }
//         ]);
//         return;
//       }

//       if (input === 'a') {
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return ctxFn.endFlow(returnMenuText);
//       }

//       if (input === 'x') {
//         await User.updateOne(
//           { telefono },
//           {
//             conversationClosed: true,
//             conversationClosedAt: new Date(),
//             inactivityStep: 2
//           }
//         );
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//       }
//     }
//   }
// );

// export { welcomeFlow };










// import { addKeyword, EVENTS } from '@builderbot/bot';
// import User from '../models/user.js';

// // --------------------------------------------------
// // CONFIG
// // --------------------------------------------------
// const SILENCE_MINUTES = 10;

// // --------------------------------------------------
// // VIDEOS (Cloudinary)
// // --------------------------------------------------
// const demoVideos = {
//   barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   atencion: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4'
// };

// // --------------------------------------------------
// // MENÚS
// // --------------------------------------------------
// const mainMenuWithGreeting = (nombre) =>
//   `👋 Hola ${nombre}!\n` +
//   `Qué bueno verte de nuevo 😊\n\n` +
//   `¿En qué puedo ayudarte?\n\n` +
//   `1️⃣ Quiero un bot para mi negocio\n` +
//   `2️⃣ Ver ejemplos de bots\n` +
//   `3️⃣ Precios y planes\n` +
//   `4️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `5️⃣ Hablar con una persona`;

// const mainMenuText = (nombre) =>
//   `Perfecto ${nombre} 😊\n` +
//   `¿En qué puedo ayudarte?\n\n` +
//   `1️⃣ Quiero un bot para mi negocio\n` +
//   `2️⃣ Ver ejemplos de bots\n` +
//   `3️⃣ Precios y planes\n` +
//   `4️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `5️⃣ Hablar con una persona`;

// const returnMenuText =
//   `Perfecto 👍\n` +
//   `Volvemos al menú. ¿Qué te gustaría hacer?\n\n` +
//   `1️⃣ Quiero un bot para mi negocio\n` +
//   `2️⃣ Ver ejemplos de bots\n` +
//   `3️⃣ Precios y planes\n` +
//   `4️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `5️⃣ Hablar con una persona`;

// const goodbyeText =
//   `👋 Perfecto\n` +
//   `Cuando quieras, volvés a escribir.\n` +
//   `¡Que tengas un excelente día!`;

// // --------------------------------------------------
// // TEXTO: CÓMO AYUDA
// // --------------------------------------------------
// const howBotHelps_1 =
//   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
//   `Hoy, entrar a un sitio web implica cargar la página,\n` +
//   `buscar un formulario, completar datos y muchas veces\n` +
//   `crear una cuenta o loguearse.\n\n` +
//   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
//   `Con un bot en WhatsApp eso no pasa.\n` +
//   `El cliente ya está logueado, ya confía en la app\n` +
//   `y ya sabe usarla.\n\n` +
//   `Solo escribe y obtiene respuesta inmediata.`;

// const howBotHelps_2 =
//   `✔ Responde consultas al instante,\n` +
//   `   incluso de noche o fines de semana\n\n` +
//   `✔ Evita perder clientes por respuestas tardías\n\n` +
//   `✔ Atiende preguntas repetitivas\n` +
//   `   sin intervención humana\n\n` +
//   `✔ Funciona 24/7,\n` +
//   `   sin que estés pegado al teléfono`;

// const howBotHelps_3 = `📲 WhatsApp ya está en el teléfono del cliente.`;

// // --------------------------------------------------
// // FLOW
// // --------------------------------------------------
// const welcomeFlow = addKeyword(EVENTS.WELCOME).addAction(
//   async (ctx, ctxFn) => {
//     const state = (await ctxFn.state.getMyState()) || {};
//     const input = ctx.body?.trim();
//     const inputLower = input?.toLowerCase();
//     const telefono = ctx.from;

//     let user = await User.findOneAndUpdate(
//       { telefono },
//       { telefono, lastInteractionAt: new Date(), inactivityStep: 0 },
//       { upsert: true, new: true }
//     );

//     // SILENCIO POST-CIERRE
//     if (user.conversationClosed) {
//       const minutesPassed = (Date.now() - new Date(user.conversationClosedAt)) / 60000;
//       if (minutesPassed < SILENCE_MINUTES) return;

//       user.conversationClosed = false;
//       user.conversationClosedAt = null;
//       user.inactivityStep = 0;
//       await user.save();

//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return ctxFn.flowDynamic([{ body: mainMenuWithGreeting(user.nombre), buttons: [{ body: 'Salir' }] }]);
//     }

//     // INICIO
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });
//         await ctxFn.flowDynamic([
//           { body: `Hola 👋\nSoy el bot de Megadev.\nEstoy acá para ayudarte con información, servicios y consultas de forma rápida y simple.` },
//           { body: `Antes de empezar, ¿cómo te llamás?` }
//         ]);
//         return;
//       }
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return ctxFn.flowDynamic([{ body: mainMenuWithGreeting(user.nombre), buttons: [{ body: 'Salir' }] }]);
//     }

//     // PEDIR NOMBRE
//     if (state.step === 'pedirNombre') {
//       const nombre = input;
//       await User.updateOne({ telefono }, { nombre });
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre });
//       return ctxFn.flowDynamic([{ body: mainMenuText(nombre), buttons: [{ body: 'Salir' }] }]);
//     }

//     // LÓGICA DE SALIDA (BOTÓN O TEXTO)
//     if (inputLower === 'salir' || inputLower === 'x') {
//         await User.updateOne({ telefono }, { conversationClosed: true, conversationClosedAt: new Date(), inactivityStep: 2 });
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//     }

//     // MENÚ PRINCIPAL
//     if (state.step === 'menuPrincipal') {
//       if (input === '2') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
//         return ctxFn.flowDynamic([{ 
//             body: `🤖 *Ejemplos de bots*\n\n1️⃣ Bot de barbería (turnos)\n2️⃣ Bot de restaurante (pedidos)\n3️⃣ Bot de atención automática`,
//             buttons: [{ body: 'Volver al menú' }, { body: 'Salir' }]
//         }]);
//       }

//       if (input === '4') {
//         await ctxFn.state.update({ step: 'comoAyuda' });
//         await ctxFn.flowDynamic([
//           { body: howBotHelps_1 },
//           { body: howBotHelps_2 },
//           { body: howBotHelps_3 },
//           { body: '¿Qué deseas hacer?', buttons: [{ body: 'Volver al menú' }, { body: 'Salir' }] }
//         ]);
//         return;
//       }
//     }

//     // CÓMO AYUDA / VER EJEMPLOS (LÓGICA VOLVER)
//     if (inputLower === 'volver al menú' || inputLower === 'a') {
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return ctxFn.flowDynamic([{ body: returnMenuText, buttons: [{ body: 'Salir' }] }]);
//     }

//     // LÓGICA ESPECÍFICA VER EJEMPLOS (ENVÍO DE VIDEOS)
//     if (state.step === 'verEjemplos') {
//       const videoMap = { '1': 'barberia', '2': 'restaurante', '3': 'atencion' };
//       if (videoMap[input]) {
//         const key = videoMap[input];
//         await ctxFn.flowDynamic([
//           { body: `🎥 Mostrando demo...` },
//           { media: demoVideos[key] },
//           { body: '¿Deseas ver otro o volver?', buttons: [{ body: 'Volver al menú' }, { body: 'Salir' }] }
//         ]);
//         return;
//       }
//     }
//   }
// );

// export { welcomeFlow };






// import { addKeyword, EVENTS } from '@builderbot/bot';
// import User from '../models/user.js';

// // --------------------------------------------------
// // CONFIG
// // --------------------------------------------------
// const SILENCE_MINUTES = 10;

// // --------------------------------------------------
// // VIDEOS (Cloudinary)
// // --------------------------------------------------
// const demoVideos = {
//   barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   atencion: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4'
// };

// // --------------------------------------------------
// // TEXTOS E INFORMACIÓN
// // --------------------------------------------------
// const menuOptionsText = (nombre, isGreeting = false) => {
//   const intro = isGreeting 
//     ? `👋 Hola ${nombre}!\nQué bueno verte de nuevo 😊\n\n` 
//     : `Perfecto ${nombre} 😊\n`;
    
//   return intro +
//     `¿En qué puedo ayudarte?\n\n` +
//     `1️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//     `2️⃣ ¿Cómo funciona?\n` +
//     `3️⃣ Ver ejemplos de bots\n` +
//     `4️⃣ Precios y planes\n` +
//     `5️⃣ Preguntas frecuentes\n` +
//     `6️⃣ Quiero un bot para mi negocio\n` +
//     `7️⃣ Hablar con una persona`;
// };

// const tipText = `💡 *Tip:* Respondé solo con el *número* de la opción que quieras elegir.`;

// const pricingText = 
//   `💳 *Nuestros Planes*\n\n` +
//   `🔹 *PLAN INICIAL*\n` +
//   `Ideal para emprendedores. Respuesta a consultas frecuentes y derivación a humano.\n\n` +
//   `🔹 *PLAN PROFESIONAL*\n` +
//   `Incluye toma de datos (leads), panel de control para edición de mensajes y catálogo básico.\n\n` +
//   `🔹 *PLAN PREMIUM*\n` +
//   `Integración con sistemas (Turnos, Reservas, Pagos) y reportes avanzados de métricas.\n\n` +
//   `💰 *¿Querés un presupuesto exacto?*\n` +
//   `Elegí la opción *6* en el menú para contarnos qué necesitas.`;

// const howBotHelps = `🤖 *¿Cómo ayuda un bot?*\n\n✔ Atiende 24/7.\n✔ Filtra consultas repetitivas.\n✔ Captura datos automáticamente.`;

// const howItWorks = `⚙️ *¿Cómo funciona?*\n\n• El cliente escribe y el bot responde por vos basado en la info de tu panel de control.\n• Si es necesario, te pasa la charla a vos.`;

// const faqText = `❓ *FAQ*\n\n• *¿Es difícil usarlo?* No, se entrega listo.\n• *¿Puedo cambiar precios?* Sí, desde tu panel al instante.`;

// const goodbyeText = `👋 Perfecto. ¡Que tengas un excelente día!`;

// // --------------------------------------------------
// // FLOW PRINCIPAL
// // --------------------------------------------------
// const welcomeFlow = addKeyword(EVENTS.WELCOME).addAction(
//   async (ctx, ctxFn) => {
//     const state = (await ctxFn.state.getMyState()) || {};
//     const input = ctx.body?.trim();
//     const inputLower = input?.toLowerCase();
//     const telefono = ctx.from;

//     let user = await User.findOneAndUpdate(
//       { telefono },
//       { telefono, lastInteractionAt: new Date(), inactivityStep: 0 },
//       { upsert: true, new: true }
//     );

//     // 1. SILENCIO POST-CIERRE
//     if (user.conversationClosed) {
//       const minutesPassed = (Date.now() - new Date(user.conversationClosedAt)) / 60000;
//       if (minutesPassed < SILENCE_MINUTES) return;
//       user.conversationClosed = false;
//       user.conversationClosedAt = null;
//       await user.save();
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return ctxFn.flowDynamic([{ body: menuOptionsText(user.nombre, true) }, { body: tipText, buttons: [{ body: 'Salir' }] }]);
//     }

//     // 2. SALIDA Y VOLVER
//     if (inputLower === 'salir' || inputLower === 'x') {
//         await User.updateOne({ telefono }, { conversationClosed: true, conversationClosedAt: new Date() });
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//     }

//     if (inputLower === 'volver al menú' || inputLower === 'a') {
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return ctxFn.flowDynamic([{ body: menuOptionsText(user.nombre) }, { body: tipText, buttons: [{ body: 'Salir' }] }]);
//     }

//     // 3. INICIO / NOMBRE
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });
//         return ctxFn.flowDynamic([{ body: `Hola 👋\nSoy el bot de Megadev.` }, { body: `¿Cómo te llamás?` }]);
//       }
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return ctxFn.flowDynamic([{ body: menuOptionsText(user.nombre, true) }, { body: tipText, buttons: [{ body: 'Salir' }] }]);
//     }

//     if (state.step === 'pedirNombre') {
//       const nombre = input;
//       await User.updateOne({ telefono }, { nombre });
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre });
//       return ctxFn.flowDynamic([{ body: menuOptionsText(nombre) }, { body: tipText, buttons: [{ body: 'Salir' }] }]);
//     }

//     // 4. LÓGICA MENÚ PRINCIPAL
//     if (state.step === 'menuPrincipal') {
//       if (input === '1') return ctxFn.flowDynamic([{ body: howBotHelps, buttons: [{ body: 'Volver al menú' }] }]);
      
//       if (input === '2') return ctxFn.flowDynamic([{ body: howItWorks, buttons: [{ body: 'Volver al menú' }] }]);
      
//       if (input === '3') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
//         return ctxFn.flowDynamic([{ body: `🤖 *Ejemplos de bots*\n\n1️⃣ Barbería\n2️⃣ Restaurante\n3️⃣ Atención`, buttons: [{ body: 'Volver al menú' }] }]);
//       }

//       if (input === '4') {
//         return ctxFn.flowDynamic([{ body: pricingText, buttons: [{ body: 'Volver al menú' }] }]);
//       }

//       if (input === '5') return ctxFn.flowDynamic([{ body: faqText, buttons: [{ body: 'Volver al menú' }] }]);
//     }

//     // 5. VIDEOS
//     if (state.step === 'verEjemplos') {
//       const videoMap = { '1': 'barberia', '2': 'restaurante', '3': 'atencion' };
//       if (videoMap[input]) {
//         return ctxFn.flowDynamic([
//           { body: `🎥 Mostrando demo...` },
//           { media: demoVideos[videoMap[input]] },
//           { body: '¿Deseas ver otro?', buttons: [{ body: 'Volver al menú' }] }
//         ]);
//       }
//     }
//   }
// );

// export { welcomeFlow };





// import { addKeyword, EVENTS } from '@builderbot/bot';
// import User from '../models/user.js';

// // --------------------------------------------------
// // CONFIG
// // --------------------------------------------------
// const SILENCE_MINUTES = 10;

// // --------------------------------------------------
// // VIDEOS (Cloudinary)
// // --------------------------------------------------
// const demoVideos = {
//   barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   atencion: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4'
// };

// // --------------------------------------------------
// // MENÚS REFORMULADOS
// // --------------------------------------------------
// const menuOptionsText = (nombre, isGreeting = false) => {
//   const intro = isGreeting 
//     ? `👋 Hola ${nombre}!\nQué bueno verte de nuevo 😊\n\n` 
//     : `Perfecto ${nombre} 😊\n`;
    
//   return intro +
//     `¿En qué puedo ayudarte?\n\n` +
//     `1️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//     `2️⃣ ¿Cómo funciona?\n` +
//     `3️⃣ Ver ejemplos de bots\n` +
//     `4️⃣ Precios y planes\n` +
//     `5️⃣ Preguntas frecuentes\n` +
//     `6️⃣ Quiero un bot para mi negocio\n` +
//     `7️⃣ Hablar con una persona`;
// };

// const returnMenuText =
//   `Perfecto 👍\n` +
//   `Volvemos al menú. ¿Qué te gustaría hacer?\n\n` +
//   `1️⃣ ¿Cómo un bot puede ayudar a tu negocio?\n` +
//   `2️⃣ ¿Cómo funciona?\n` +
//   `3️⃣ Ver ejemplos de bots\n` +
//   `4️⃣ Precios y planes\n` +
//   `5️⃣ Preguntas frecuentes\n` +
//   `6️⃣ Quiero un bot para mi negocio\n` +
//   `7️⃣ Hablar con una persona`;

// const goodbyeText =
//   `👋 Perfecto\n` +
//   `Cuando quieras, volvés a escribir.\n` +
//   `¡Que tengas un excelente día!`;

// // --------------------------------------------------
// // TEXTOS INFORMATIVOS
// // --------------------------------------------------

// const howBotHelps = 
//   `🤖 *¿Cómo ayuda un bot?*\n\n` +
//   `✔ Atiende 24/7 sin interrupciones.\n` +
//   `✔ Evita que los clientes se olviden de vos por falta de respuesta.\n` +
//   `✔ Filtra consultas repetitivas.\n` +
//   `✔ Captura datos de prospectos automáticamente.`;

// const howItWorks = 
//   `⚙️ *¿Cómo funciona?*\n\n` +
//   `• El cliente escribe a tu WhatsApp como si hablara con una persona.\n` +
//   `• El bot le muestra opciones claras y responde automáticamente.\n` +
//   `• Todas las respuestas se basan en la información que vos cargás previamente.\n\n` +
//   `💻 *Panel de Control:*\n` +
//   `Tenés un panel simple para cargar precios, servicios y horarios. No necesitás programar nada. Si cambiás un dato, el bot lo usa al instante.\n\n` +
//   `Cuando una consulta lo requiere, pasa la charla a una persona real. Todo rápido y ordenado.`;

// const faqText = 
//   `❓ *FAQ - Preguntas Frecuentes*\n\n` +
//   `• *¿Necesito saber programar?* No, se entrega listo.\n` +
//   `• *¿Funciona 24hs?* Sí, siempre activo.\n` +
//   `• *¿Es solo para WhatsApp?* Sí, el canal más usado.\n` +
//   `• *¿Puedo tomar datos?* Sí, nombre, email y más.\n` +
//   `• *¿Se puede personalizar?* Totalmente.`;

// // --------------------------------------------------
// // FLOW
// // --------------------------------------------------
// const welcomeFlow = addKeyword(EVENTS.WELCOME).addAction(
//   async (ctx, ctxFn) => {
//     const state = (await ctxFn.state.getMyState()) || {};
//     const input = ctx.body?.trim();
//     const inputLower = input?.toLowerCase();
//     const telefono = ctx.from;

//     let user = await User.findOneAndUpdate(
//       { telefono },
//       { telefono, lastInteractionAt: new Date(), inactivityStep: 0 },
//       { upsert: true, new: true }
//     );

//     // SILENCIO POST-CIERRE
//     if (user.conversationClosed) {
//       const minutesPassed = (Date.now() - new Date(user.conversationClosedAt)) / 60000;
//       if (minutesPassed < SILENCE_MINUTES) return;

//       user.conversationClosed = false;
//       user.conversationClosedAt = null;
//       await user.save();
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return ctxFn.flowDynamic([{ body: menuOptionsText(user.nombre, true), buttons: [{ body: 'Salir' }] }]);
//     }

//     // INICIO
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });
//         await ctxFn.flowDynamic([
//           { body: `Hola 👋\nSoy el bot de Megadev.\nEstoy acá para ayudarte.` },
//           { body: `Antes de empezar, ¿cómo te llamás?` }
//         ]);
//         return;
//       }
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return ctxFn.flowDynamic([{ body: menuOptionsText(user.nombre, true), buttons: [{ body: 'Salir' }] }]);
//     }

//     // LÓGICA SALIDA Y VOLVER
//     if (inputLower === 'salir' || inputLower === 'x') {
//         await User.updateOne({ telefono }, { conversationClosed: true, conversationClosedAt: new Date() });
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//     }

//     if (inputLower === 'volver al menú' || inputLower === 'a') {
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return ctxFn.flowDynamic([{ body: returnMenuText, buttons: [{ body: 'Salir' }] }]);
//     }

//     // PASOS
//     if (state.step === 'pedirNombre') {
//       const nombre = input;
//       await User.updateOne({ telefono }, { nombre });
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre });
//       return ctxFn.flowDynamic([{ body: menuOptionsText(nombre), buttons: [{ body: 'Salir' }] }]);
//     }

//     if (state.step === 'menuPrincipal') {
//       // 1. Cómo ayuda
//       if (input === '1') {
//         return ctxFn.flowDynamic([{ body: howBotHelps, buttons: [{ body: 'Volver al menú' }] }]);
//       }

//       // 2. Cómo funciona
//       if (input === '2') {
//         return ctxFn.flowDynamic([{ body: howItWorks, buttons: [{ body: 'Volver al menú' }] }]);
//       }

//       // 3. Ver Ejemplos
//       if (input === '3') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
//         return ctxFn.flowDynamic([{ 
//             body: `🤖 *Ejemplos de bots*\n\n1️⃣ Barbería\n2️⃣ Restaurante\n3️⃣ Atención`,
//             buttons: [{ body: 'Volver al menú' }]
//         }]);
//       }

//       // 5. FAQ
//       if (input === '5') {
//         return ctxFn.flowDynamic([{ body: faqText, buttons: [{ body: 'Volver al menú' }] }]);
//       }
//     }

//     // LÓGICA VIDEOS (Paso 3)
//     if (state.step === 'verEjemplos') {
//       const videoMap = { '1': 'barberia', '2': 'restaurante', '3': 'atencion' };
//       if (videoMap[input]) {
//         const key = videoMap[input];
//         return ctxFn.flowDynamic([
//           { body: `🎥 Mostrando demo...` },
//           { media: demoVideos[key] },
//           { body: '¿Deseas ver otro?', buttons: [{ body: 'Volver al menú' }] }
//         ]);
//       }
//     }
//   }
// );

// export { welcomeFlow };



























// mjwtToken= EAAW0H2ZAXukcBQt9RXkTJK07Unyu6PN7O9pjlG2mJO9A9YeC7CqejZBsZAYHGJ8k0dswZCcye2uMOJqbfmV3OdVhPc300RiMmZBZBr5NPqaST5ehZAaYEsk2DQL8OSTPOSidPxAOLJo4TrVCgmMzdV2ZB3KHA7NZAeCe3KlqOfqrSkLkhwaGoV1JkmdBT7f1ZBZCCZA9cDBbL3Pxp7xGwo4ggZBoZCm3COZChVIa3ls376y58ne5tlPZCjcg6ryXTCHQBPfZA1cobDW659Ip0ObBS5Y9EKjILWj0ZD
// nnumberId= 10093004722588384




// import { addKeyword, EVENTS } from '@builderbot/bot';
// import User from '../models/user.js';

// // --- CONFIGURACIÓN Y VIDEOS ---
// const SILENCE_MINUTES = 10;
// const demoVideos = {
//     barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4'
// };

// // --- TEXTOS ORIGINALES (Inspirados en tu código base) ---
// const howBotHelps_1 = "🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\nWhatsApp ya está en el teléfono del cliente. El cliente ya confía en la app y sabe usarla. Con un bot, obtiene respuesta inmediata sin pasos extra.";
// const howBotHelps_2 = "✔ Responde consultas 24/7.\n✔ Evita perder clientes por respuestas tardías.\n✔ Atiende preguntas repetitivas sin intervención humana.";

// const welcomeFlow = addKeyword(EVENTS.WELCOME)
//     .addAction(async (ctx, ctxFn) => {
//         const telefono = ctx.from;
        
//         let user = await User.findOneAndUpdate(
//             { telefono },
//             { telefono, lastInteractionAt: new Date() },
//             { upsert: true, new: true }
//         );

//         // Control de silencio post-cierre
//         if (user.conversationClosed) {
//             const minutesPassed = (Date.now() - new Date(user.conversationClosedAt)) / 60000;
//             if (minutesPassed < SILENCE_MINUTES) return ctxFn.endFlow();
//             await User.updateOne({ telefono }, { conversationClosed: false });
//         }

//         // Si no tiene nombre, pedirlo
//         if (!user.nombre) {
//             await ctxFn.state.update({ step: 'pedirNombre' });
//             return await ctxFn.flowDynamic('Hola 👋, soy el bot de Megadev. ¿Cómo te llamás?');
//         }

//         // Menú Principal con botones acortados para evitar recortes visuales
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return await ctxFn.flowDynamic([
//             {
//                 body: `👋 Hola ${user.nombre}!\n¿En qué puedo ayudarte?`,
//                 buttons: [
//                     { body: 'Ver ejemplos' },
//                     { body: 'Beneficios del bot' }, // Texto corto < 20 caracteres
//                     { body: 'Salir' }
//                 ]
//             }
//         ]);
//     })
//     .addAction({ capture: true }, async (ctx, ctxFn) => {
//         const input = ctx.body.trim();
//         const telefono = ctx.from;
//         const state = await ctxFn.state.getMyState();

//         // 1. Manejo de nombre
//         if (state?.step === 'pedirNombre') {
//             await User.updateOne({ telefono }, { nombre: input });
//             await ctxFn.state.update({ step: 'menuPrincipal' });
//             return await ctxFn.flowDynamic([
//                 {
//                     body: `¡Perfecto ${input}! ¿Qué quieres hacer ahora?`,
//                     buttons: [{ body: 'Ver ejemplos' }, { body: 'Beneficios del bot' }]
//                 }
//             ]);
//         }

//         // 2. Manejo de botones con coincidencias parciales (evita fallos por reply/comentario)
        
//         if (input.includes('Beneficios')) {
//             await ctxFn.flowDynamic([{ body: howBotHelps_1 }, { body: howBotHelps_2 }]);
//             return await ctxFn.flowDynamic([
//                 {
//                     body: "¿Te gustaría ver ejemplos en video?",
//                     buttons: [{ body: 'Ver ejemplos' }, { body: 'Volver al inicio' }]
//                 }
//             ]);
//         }

//         if (input.includes('Ver ejemplos')) {
//             return await ctxFn.flowDynamic([
//                 {
//                     body: "🤖 *Ejemplos disponibles:*",
//                     buttons: [
//                         { body: 'Bot Barbería' },
//                         { body: 'Volver al inicio' }
//                     ]
//                 }
//             ]);
//         }

//         if (input.includes('Barbería')) {
//             await ctxFn.flowDynamic([
//                 { body: "💈 *Bot para Barbería*\n✔ Turnos automáticos y confirmaciones WhatsApp." },
//                 { media: demoVideos.barberia }
//             ]);
//             // Re-enviamos opciones para que el flujo no muera
//             return await ctxFn.flowDynamic([{
//                 body: "¿Deseas algo más?",
//                 buttons: [{ body: 'Ver ejemplos' }, { body: 'Salir' }]
//             }]);
//         }

//         if (input.includes('inicio')) {
//             const user = await User.findOne({ telefono });
//             return await ctxFn.flowDynamic([
//                 {
//                     body: `Hola ${user.nombre}, ¿qué quieres hacer?`,
//                     buttons: [
//                         { body: 'Ver ejemplos' },
//                         { body: 'Beneficios del bot' },
//                         { body: 'Salir' }
//                     ]
//                 }
//             ]);
//         }

//         if (input.includes('Salir')) {
//             await User.updateOne(
//                 { telefono },
//                 { conversationClosed: true, conversationClosedAt: new Date() }
//             );
//             return await ctxFn.endFlow('👋 ¡Chau! Volvé cuando quieras escribiendo cualquier cosa.');
//         }
//     });

// export { welcomeFlow };
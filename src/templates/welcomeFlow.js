// import { addKeyword, EVENTS } from '@builderbot/bot';
// import User from '../models/user.js';

// // --------------------------------------------------
// // CONFIG
// // --------------------------------------------------
// const SILENCE_MINUTES = 10;

// // --------------------------------------------------
// // VIDEOS (Cloudinary) - ACTUALIZADOS
// // --------------------------------------------------
// const demoVideos = {
//   barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1768153513/Mi_video54_jbgods.mp4',
//   inmobiliaria: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766344730/Mi_video53_po01aw.mp4'
// };

// // --------------------------------------------------
// // TEXTOS INFORMATIVOS
// // --------------------------------------------------

// // // --- TEXTOS INFORMACIÓN ---
// const howBotHelps_1 =
//   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
//   `Hoy, entrar a un sitio web implica cargar la página, buscar un formulario, completar datos y muchas veces crear una cuenta o loguearse.\n\n` +
//   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
//   `Con un bot en WhatsApp eso no pasa. El cliente ya está logueado, ya confía en la app y ya sabe usarla.\n\n` +
//   `Solo escribe y obtiene respuesta inmediata.`;

// const howBotHelps_2 =
//   `✔ Responde consultas al instante, incluso de noche o fines de semana\n\n` +
//   `✔ Evita perder clientes por respuestas tardías\n\n` +
//   `✔ Atiende preguntas repetitivas sin intervención humana\n\n` +
//   `✔ Funciona 24/7, sin que estés pegado al teléfono`;

// const howBotHelps_3 = `📲 WhatsApp ya está en el teléfono del cliente.`;

// const howItWorks = 
//   `⚙️ *¿Cómo funciona?*\n\n` +
//   `• El cliente escribe a tu WhatsApp como si hablara con una persona.\n` +
//   `• El bot le muestra opciones claras y responde automáticamente.\n` +
//   `• Todas las respuestas se basan en la información que vos cargás previamente.\n\n` +
//   `💻 *Panel de Control:*\n` +
//   `Tenés un panel simple y fácil de usar. Desde ahí cargás precios, servicios, horarios y mensajes. No necesitás programar ni tocar código.\n\n` +
//   `Si cambiás un dato, el bot lo usa al instante. Cuando una consulta lo requiere, pasa la charla a una persona real.`;

// const pricingText = 
//   `💳 *Planes y Precios*\n\n` +
//   `🔹 *Plan Inicial:* Automatización de FAQ y bienvenida.\n` +
//   `🔹 *Plan Profesional:* Toma de datos, panel de control y gestión de clientes.\n` +
//   `🔹 *Plan Premium:* Integraciones con sistemas de turnos, pagos y envíos.\n\n` +
//   `👉 Para un presupuesto exacto, selecciona la opción *6*.`;

// const faqText =  
//   `❓ *Preguntas frecuentes*\n\n` +
//   `• *¿Cómo funciona el bot?* El bot automatiza la atención a tus clientes por WhatsApp. Responde consultas frecuentes, muestra información, toma datos y deriva a una persona solo cuando es necesario.\n` +
//   `• *¿Necesito saber programación para usarlo?* No. El bot se entrega configurado y listo para usar. Vos solo lo usás desde WhatsApp como cualquier otro chat.\n` +
//   `• *¿El bot reemplaza a una persona?* No del todo. El bot filtra, responde lo repetitivo y ahorra tiempo. Cuando el cliente quiere hablar con alguien, el bot lo deriva automáticamente.\n` +
//   `• *¿Qué tipo de negocios pueden usarlo?* Emprendimientos, locales comerciales, profesionales, inmobiliarias, restaurantes, gimnasios, servicios técnicos y más. Si atendés clientes por WhatsApp, el bot sirve.\n` +
//   `• *¿El bot puede tomar datos de clientes?* Sí. Puede pedir nombre, teléfono, email, horarios, intereses y guardar esa información para seguimiento o ventas.\n` +
//   `• *¿Funciona las 24 horas?* Sí. El bot responde automáticamente las 24 hs, incluso cuando vos no estás disponible.\n` +
//   `• *¿Se puede personalizar?* Totalmente. Se adapta a tu negocio, tu forma de hablar y tus necesidades específicas.\n` +
//   `• *¿Qué pasa si necesito cambios después?* Podés solicitar ajustes o mejoras. El bot puede crecer junto con tu negocio.\n` +
//   `• *¿Es solo para WhatsApp?* Principalmente sí, pero también puede adaptarse a otros canales según el proyecto.`;
  
  
// const goodbyeText = `👋 Perfecto. Cuando quieras, volvés a escribir.\n¡Que tengas un excelente día!`;



// const howBotHelps_1 =
//   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
//   `Hoy, entrar a un sitio web implica cargar la página, buscar un formulario, completar datos y muchas veces crear una cuenta o loguearse.\n\n` +
//   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
//   `Con un bot en WhatsApp eso no pasa. El cliente ya está logueado, ya confía en la app y ya sabe usarla.\n\n` +
//   `Solo escribe y obtiene respuesta inmediata.`;

// const howBotHelps_2 =
//   `✔ Responde consultas al instante, incluso de noche o fines de semana\n\n` +
//   `✔ Evita perder clientes por respuestas tardías\n\n` +
//   `✔ Atiende preguntas repetitivas sin intervención humana\n\n` +
//   `✔ Funciona 24/7, sin que estés pegado al teléfono`;

// const howBotHelps_3 = `📲 WhatsApp ya está en el teléfono del cliente.`;

// const howItWorks = 
//   `⚙️ *¿Cómo funciona?*\n\n` +
//   `• El cliente escribe a tu WhatsApp como si hablara con una persona.\n` +
//   `• El bot le muestra opciones claras y responde automáticamente.\n` +
//   `• Todas las respuestas se basan en la información que vos cargás previamente.\n\n` +
//   `💻 *Panel de Control:*\n` +
//   `Tenés un panel simple y fácil de usar. Desde ahí cargás precios, servicios, horarios y mensajes. No necesitás programar ni tocar código.\n\n` +
//   `Si cambiás un dato, el bot lo usa al instante. Cuando una consulta lo requiere, pasa la charla a una persona real.`;

// const pricingText = 
//   `💳 *Planes y Precios*\n\n` +
//   `🔹 *Plan Inicial:* Automatización de FAQ y bienvenida.\n` +
//   `🔹 *Plan Profesional:* Toma de datos, panel de control y gestión de clientes.\n` +
//   `🔹 *Plan Premium:* Integraciones con sistemas de turnos, pagos y envíos.\n\n` +
//   `👉 Para un presupuesto exacto, selecciona "Quiero un bot para mi negocio".`;

// const faqText = 
//   `❓ *Preguntas frecuentes*\n\n` +
//   `• *¿Necesito programar?* No, se entrega listo para usar.\n` +
//   `• *¿Funciona 24/7?* Sí, responde siempre.\n` +
//   `• *¿Se puede personalizar?* Totalmente, a tu gusto.\n` +
//   `• *¿Y si necesito cambios?* El bot puede crecer y ajustarse con tu negocio.`;

// const goodbyeText = `👋 Perfecto. Cuando quieras, volvés a escribir.\n¡Que tengas un excelente día!`;

// --------------------------------------------------
// FUNCIÓN PARA ENVIAR MENÚ PRINCIPAL
// --------------------------------------------------
// const sendMainMenu = (provider, telefono, nombre, isGreeting = false) => {
//   const greetingText = isGreeting 
//     ? `👋 Hola ${nombre}!\nQué bueno verte de nuevo 😊\n\n¿En qué puedo ayudarte?`
//     : `Perfecto ${nombre} 😊\n\n¿En qué puedo ayudarte?`;

//   return provider.sendList(telefono, {
//     header: {
//       type: 'text',
//       text: '🤖 Megadev Bot'
//     },
//     body: {
//       text: greetingText
//     },
//     footer: {
//       text: 'Selecciona una opción del menú'
//     },
//     action: {
//       button: 'Ver opciones',
//       sections: [
//         {
//           title: '📋 Información',
//           rows: [
//             {
//               id: 'como_ayuda',
//               title: '¿Cómo ayuda un bot?',
//               description: 'Beneficios para tu negocio'
//             },
//             {
//               id: 'como_funciona',
//               title: '¿Cómo funciona?',
//               description: 'Proceso y panel de control'
//             },
//             {
//               id: 'ver_ejemplos',
//               title: 'Ver ejemplos de bots',
//               description: 'Demos en video'
//             }
//           ]
//         },
//         {
//           title: '💼 Servicios',
//           rows: [
//             {
//               id: 'precios',
//               title: 'Precios y planes',
//               description: 'Consulta nuestras tarifas'
//             },
//             {
//               id: 'faq',
//               title: 'Preguntas frecuentes',
//               description: 'Dudas comunes resueltas'
//             },
//             {
//               id: 'quiero_bot',
//               title: 'Quiero un bot',
//               description: 'Solicitar presupuesto'
//             },
//             {
//               id: 'hablar_persona',
//               title: 'Hablar con una persona',
//               description: 'Contacto con asesor'
//             }
//           ]
//         },
//         {
//           title: '⚙️ Opciones',
//           rows: [
//             {
//               id: 'salir',
//               title: 'Salir',
//               description: 'Cerrar conversación'
//             }
//           ]
//         }
//       ]
//     }
//   });
// };

// // --------------------------------------------------
// // FUNCIÓN PARA BOTONES VOLVER/SALIR
// // --------------------------------------------------
// const sendNavigationButtons = async (ctxFn, message) => {
//   return ctxFn.flowDynamic([
//     {
//       body: message,
//       buttons: [
//         { body: 'Volver al menú' },
//         { body: 'Salir' }
//       ]
//     }
//   ]);
// };

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

//     // --------------------------------------------------
//     // 1. SILENCIO POST-CIERRE
//     // --------------------------------------------------
//     if (user.conversationClosed) {
//       const minutesPassed = (Date.now() - new Date(user.conversationClosedAt)) / 60000;
//       if (minutesPassed < SILENCE_MINUTES) return;
      
//       user.conversationClosed = false;
//       user.conversationClosedAt = null;
//       await user.save();
      
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return sendMainMenu(ctxFn.provider, telefono, user.nombre, true);
//     }

//     // --------------------------------------------------
//     // 2. LÓGICA SALIDA Y VOLVER (GLOBAL)
//     // --------------------------------------------------
//     if (inputLower === 'salir' || input === '❌ salir') {
//       await User.updateOne({ telefono }, { 
//         conversationClosed: true, 
//         conversationClosedAt: new Date(),
//         inactivityStep: 2 
//       });
//       await ctxFn.state.clear();
//       return ctxFn.endFlow(goodbyeText);
//     }

//     if (inputLower === 'volver_menu' || inputLower === '⬅️ volver al menú' || inputLower === 'volver al menú') {
//       await ctxFn.state.update({ step: 'menuPrincipal' });
//       return sendMainMenu(ctxFn.provider, telefono, state.nombre || user.nombre);
//     }

//     // --------------------------------------------------
//     // 3. INICIO / PEDIR NOMBRE
//     // --------------------------------------------------
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });
//         return ctxFn.flowDynamic([
//           { body: `Hola 👋\nSoy el bot de Megadev.\nEstoy acá para ayudarte de forma rápida y simple.` },
//           { body: `Antes de empezar, ¿cómo te llamás?` }
//         ]);
//       }
      
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return sendMainMenu(ctxFn.provider, telefono, user.nombre, true);
//     }

//     if (state.step === 'pedirNombre') {
//       const nombre = input;
//       await User.updateOne({ telefono }, { nombre });
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre });
//       return sendMainMenu(ctxFn.provider, telefono, nombre);
//     }

//     // --------------------------------------------------
//     // 4. MENÚ PRINCIPAL
//     // --------------------------------------------------
//     if (state.step === 'menuPrincipal') {
      
//       // Opción: ¿Cómo ayuda un bot?
//       if (inputLower === 'como_ayuda' || inputLower === '¿cómo ayuda un bot?') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { body: howBotHelps_1 },
//           { body: howBotHelps_2 },
//           { body: howBotHelps_3 }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: ¿Cómo funciona?
//       if (inputLower === 'como_funciona' || inputLower === '¿cómo funciona?') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([{ body: howItWorks }]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: Ver ejemplos
//       if (inputLower === 'ver_ejemplos' || inputLower === 'ver ejemplos de bots') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
        
//         return ctxFn.provider.sendList(telefono, {
//           header: {
//             type: 'text',
//             text: '🎥 Ejemplos de bots'
//           },
//           body: {
//             text: 'Selecciona qué tipo de bot te gustaría ver en acción:'
//           },
//           footer: {
//             text: 'Elige una demo'
//           },
//           action: {
//             button: 'Ver demos',
//             sections: [
//               {
//                 title: 'Demos disponibles',
//                 rows: [
//                   {
//                     id: 'demo_barberia',
//                     title: '💈 Barbería',
//                     description: 'Sistema de turnos automático'
//                   },
//                   {
//                     id: 'demo_restaurante',
//                     title: '🍽️ Restaurante',
//                     description: 'Pedidos online'
//                   },
//                   {
//                     id: 'demo_inmobiliaria',
//                     title: '🏠 Inmobiliaria',
//                     description: 'Consultas de propiedades'
//                   }
//                 ]
//               },
//               {
//                 title: 'Navegación',
//                 rows: [
//                   {
//                     id: 'volver_menu',
//                     title: '⬅️ Volver al menú',
//                     description: 'Regresar al inicio'
//                   },
//                   {
//                     id: 'salir',
//                     title: '❌ Salir',
//                     description: 'Cerrar conversación'
//                   }
//                 ]
//               }
//             ]
//           }
//         });
//       }

//       // Opción: Precios
//       if (inputLower === 'precios' || inputLower === 'precios y planes') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([{ body: pricingText }]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: FAQ
//       if (inputLower === 'faq' || inputLower === 'preguntas frecuentes') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([{ body: faqText }]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: Quiero un bot
//       if (inputLower === 'quiero_bot' || inputLower === 'quiero un bot') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `📝 *Perfecto ${state.nombre}!*\n\n` +
//                   `Para armar un presupuesto personalizado, necesito algunos datos:\n\n` +
//                   `• ¿Qué tipo de negocio tenés?\n` +
//                   `• ¿Qué tareas querés automatizar?\n` +
//                   `• ¿Cuántos mensajes recibís por día aproximadamente?\n\n` +
//                   `Contame un poco sobre tu negocio 👇`
//           }
//         ]);
//         return sendNavigationButtons(ctxFn, 'O si preferís:');
//       }

//       // Opción: Hablar con persona
//       if (inputLower === 'hablar_persona' || inputLower === 'hablar con una persona') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `👤 *Contacto con asesor*\n\n` +
//                   `Te contactaremos a la brevedad.\n` +
//                   `Horarios de atención:\n` +
//                   `Lunes a Viernes: 9:00 - 18:00 hs\n\n` +
//                   `También podés escribirnos a:\n` +
//                   `📧 info@megadev.com.ar\n` +
//                   `📱 WhatsApp: +54 9 11 xxxx-xxxx`
//           }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }
//     }

//     // --------------------------------------------------
//     // 5. LÓGICA DE VIDEOS (VER EJEMPLOS)
//     // --------------------------------------------------
//     if (state.step === 'verEjemplos') {
      
//       if (inputLower === 'demo_barberia' || inputLower === '💈 barbería') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `💈 *Bot para Barbería*\n\n` +
//                   `✔ Turnos automáticos\n` +
//                   `✔ Recordatorios por WhatsApp\n` +
//                   `✔ Cancelaciones y reprogramación\n` +
//                   `✔ Confirmaciones automáticas`
//           },
//           { media: demoVideos.barberia }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Deseas ver otro ejemplo?');
//       }

//       if (inputLower === 'demo_restaurante' || inputLower === '🍽️ restaurante') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `🍽️ *Bot para Restaurante*\n\n` +
//                   `✔ Pedidos online automáticos\n` +
//                   `✔ Menú interactivo con fotos\n` +
//                   `✔ Seguimiento de entregas\n` +
//                   `✔ Sistema de reservas`
//           },
//           { media: demoVideos.restaurante }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Deseas ver otro ejemplo?');
//       }

//       if (inputLower === 'demo_inmobiliaria' || inputLower === '🏠 inmobiliaria') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `🏠 *Bot para Inmobiliaria*\n\n` +
//                   `✔ Consultas de propiedades\n` +
//                   `✔ Filtros por zona, precio y tipo\n` +
//                   `✔ Envío automático de fotos y videos\n` +
//                   `✔ Agendado de visitas`
//           },
//           { media: demoVideos.inmobiliaria }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Deseas ver otro ejemplo?');
//       }
//     }

//     // --------------------------------------------------
//     // 6. ESPERANDO ACCIÓN (después de mostrar información)
//     // --------------------------------------------------
//     if (state.step === 'esperandoAccion') {
//       // Ya se manejan los botones globalmente en la sección 2
//       // No necesita lógica adicional aquí
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
// // VIDEOS (Cloudinary) - ACTUALIZADOS
// // --------------------------------------------------
// const demoVideos = {
//   barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1768153513/Mi_video54_jbgods.mp4',
//   inmobiliaria: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766344730/Mi_video53_po01aw.mp4'
// };

// // --------------------------------------------------
// // TEXTOS INFORMATIVOS
// // --------------------------------------------------

// // // --- TEXTOS INFORMACIÓN ---
// const howBotHelps_1 =
//   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
//   `Hoy, entrar a un sitio web implica cargar la página, buscar un formulario, completar datos y muchas veces crear una cuenta o loguearse.\n\n` +
//   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
//   `Con un bot en WhatsApp eso no pasa. El cliente ya está logueado, ya confía en la app y ya sabe usarla.\n\n` +
//   `Solo escribe y obtiene respuesta inmediata.`;

// const howBotHelps_2 =
//   `✔ Responde consultas al instante, incluso de noche o fines de semana\n\n` +
//   `✔ Evita perder clientes por respuestas tardías\n\n` +
//   `✔ Atiende preguntas repetitivas sin intervención humana\n\n` +
//   `✔ Funciona 24/7, sin que estés pegado al teléfono`;

// const howBotHelps_3 = `📲 WhatsApp ya está en el teléfono del cliente.`;

// const howItWorks = 
//   `⚙️ *¿Cómo funciona?*\n\n` +
//   `• El cliente escribe a tu WhatsApp como si hablara con una persona.\n` +
//   `• El bot le muestra opciones claras y responde automáticamente.\n` +
//   `• Todas las respuestas se basan en la información que vos cargás previamente.\n\n` +
//   `💻 *Panel de Control:*\n` +
//   `Tenés un panel simple y fácil de usar. Desde ahí cargás precios, servicios, horarios y mensajes. No necesitás programar ni tocar código.\n\n` +
//   `Si cambiás un dato, el bot lo usa al instante. Cuando una consulta lo requiere, pasa la charla a una persona real.`;

// const pricingText = 
//   `💳 *Planes y Precios*\n\n` +
//   `🔹 *Plan Inicial:* Automatización de FAQ y bienvenida.\n` +
//   `🔹 *Plan Profesional:* Toma de datos, panel de control y gestión de clientes.\n` +
//   `🔹 *Plan Premium:* Integraciones con sistemas de turnos, pagos y envíos.\n\n` +
//   `👉 Para un presupuesto exacto, selecciona la opción *6*.`;

// const faqText =  
//   `❓ *Preguntas frecuentes*\n\n` +
//   `• *¿Cómo funciona el bot?* El bot automatiza la atención a tus clientes por WhatsApp. Responde consultas frecuentes, muestra información, toma datos y deriva a una persona solo cuando es necesario.\n` +
//   `• *¿Necesito saber programación para usarlo?* No. El bot se entrega configurado y listo para usar. Vos solo lo usás desde WhatsApp como cualquier otro chat.\n` +
//   `• *¿El bot reemplaza a una persona?* No del todo. El bot filtra, responde lo repetitivo y ahorra tiempo. Cuando el cliente quiere hablar con alguien, el bot lo deriva automáticamente.\n` +
//   `• *¿Qué tipo de negocios pueden usarlo?* Emprendimientos, locales comerciales, profesionales, inmobiliarias, restaurantes, gimnasios, servicios técnicos y más. Si atendés clientes por WhatsApp, el bot sirve.\n` +
//   `• *¿El bot puede tomar datos de clientes?* Sí. Puede pedir nombre, teléfono, email, horarios, intereses y guardar esa información para seguimiento o ventas.\n` +
//   `• *¿Funciona las 24 horas?* Sí. El bot responde automáticamente las 24 hs, incluso cuando vos no estás disponible.\n` +
//   `• *¿Se puede personalizar?* Totalmente. Se adapta a tu negocio, tu forma de hablar y tus necesidades específicas.\n` +
//   `• *¿Qué pasa si necesito cambios después?* Podés solicitar ajustes o mejoras. El bot puede crecer junto con tu negocio.\n` +
//   `• *¿Es solo para WhatsApp?* Principalmente sí, pero también puede adaptarse a otros canales según el proyecto.`;
  
  
// const goodbyeText = `👋 Perfecto. Cuando quieras, volvés a escribir.\n¡Que tengas un excelente día!`;



// // const howBotHelps_1 =
// //   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
// //   `Hoy, entrar a un sitio web implica cargar la página, buscar un formulario, completar datos y muchas veces crear una cuenta o loguearse.\n\n` +
// //   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
// //   `Con un bot en WhatsApp eso no pasa. El cliente ya está logueado, ya confía en la app y ya sabe usarla.\n\n` +
// //   `Solo escribe y obtiene respuesta inmediata.`;

// // const howBotHelps_2 =
// //   `✔ Responde consultas al instante, incluso de noche o fines de semana\n\n` +
// //   `✔ Evita perder clientes por respuestas tardías\n\n` +
// //   `✔ Atiende preguntas repetitivas sin intervención humana\n\n` +
// //   `✔ Funciona 24/7, sin que estés pegado al teléfono`;

// // const howBotHelps_3 = `📲 WhatsApp ya está en el teléfono del cliente.`;

// // const howItWorks = 
// //   `⚙️ *¿Cómo funciona?*\n\n` +
// //   `• El cliente escribe a tu WhatsApp como si hablara con una persona.\n` +
// //   `• El bot le muestra opciones claras y responde automáticamente.\n` +
// //   `• Todas las respuestas se basan en la información que vos cargás previamente.\n\n` +
// //   `💻 *Panel de Control:*\n` +
// //   `Tenés un panel simple y fácil de usar. Desde ahí cargás precios, servicios, horarios y mensajes. No necesitás programar ni tocar código.\n\n` +
// //   `Si cambiás un dato, el bot lo usa al instante. Cuando una consulta lo requiere, pasa la charla a una persona real.`;

// // const pricingText = 
// //   `💳 *Planes y Precios*\n\n` +
// //   `🔹 *Plan Inicial:* Automatización de FAQ y bienvenida.\n` +
// //   `🔹 *Plan Profesional:* Toma de datos, panel de control y gestión de clientes.\n` +
// //   `🔹 *Plan Premium:* Integraciones con sistemas de turnos, pagos y envíos.\n\n` +
// //   `👉 Para un presupuesto exacto, selecciona "Quiero un bot para mi negocio".`;

// // const faqText = 
// //   `❓ *Preguntas frecuentes*\n\n` +
// //   `• *¿Necesito programar?* No, se entrega listo para usar.\n` +
// //   `• *¿Funciona 24/7?* Sí, responde siempre.\n` +
// //   `• *¿Se puede personalizar?* Totalmente, a tu gusto.\n` +
// //   `• *¿Y si necesito cambios?* El bot puede crecer y ajustarse con tu negocio.`;

// // const goodbyeText = `👋 Perfecto. Cuando quieras, volvés a escribir.\n¡Que tengas un excelente día!`;

// // --------------------------------------------------
// // FUNCIÓN PARA ENVIAR MENÚ PRINCIPAL
// // --------------------------------------------------
// const sendMainMenu = (provider, telefono, nombre, isGreeting = false) => {
//   const greetingText = isGreeting 
//     ? `👋 Hola ${nombre}!\nQué bueno verte de nuevo 😊\n\n¿En qué puedo ayudarte?`
//     : `Perfecto ${nombre} 😊\n\n¿En qué puedo ayudarte?`;

//   return provider.sendList(telefono, {
//     header: {
//       type: 'text',
//       text: '🤖 Megadev Bot'
//     },
//     body: {
//       text: greetingText
//     },
//     footer: {
//       text: 'Selecciona una opción del menú'
//     },
//     action: {
//       button: 'Ver opciones',
//       sections: [
//         {
//           title: '📋 Información',
//           rows: [
//             {
//               id: 'como_ayuda',
//               title: '¿Cómo ayuda un bot?',
//               description: 'Beneficios para tu negocio'
//             },
//             {
//               id: 'como_funciona',
//               title: '¿Cómo funciona?',
//               description: 'Proceso y panel de control'
//             },
//             {
//               id: 'ver_ejemplos',
//               title: 'Ver ejemplos de bots',
//               description: 'Demos en video'
//             }
//           ]
//         },
//         {
//           title: '💼 Servicios',
//           rows: [
//             {
//               id: 'precios',
//               title: 'Precios y planes',
//               description: 'Consulta nuestras tarifas'
//             },
//             {
//               id: 'faq',
//               title: 'Preguntas frecuentes',
//               description: 'Dudas comunes resueltas'
//             },
//             {
//               id: 'quiero_bot',
//               title: 'Quiero un bot',
//               description: 'Solicitar presupuesto'
//             },
//             {
//               id: 'hablar_persona',
//               title: 'Hablar con una persona',
//               description: 'Contacto con asesor'
//             }
//           ]
//         },
//         {
//           title: '⚙️ Opciones',
//           rows: [
//             {
//               id: 'salir',
//               title: 'Salir',
//               description: 'Cerrar conversación'
//             }
//           ]
//         }
//       ]
//     }
//   });
// };

// // --------------------------------------------------
// // FUNCIÓN PARA BOTONES VOLVER/SALIR
// // --------------------------------------------------
// const sendNavigationButtons = async (ctxFn, message) => {
//   return ctxFn.flowDynamic([
//     {
//       body: message,
//       buttons: [
//         { body: 'Volver al menú' },
//         { body: 'Salir' }
//       ]
//     }
//   ]);
// };

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

//     // --------------------------------------------------
//     // 1. SILENCIO POST-CIERRE
//     // --------------------------------------------------
//     if (user.conversationClosed) {
//       const minutesPassed = (Date.now() - new Date(user.conversationClosedAt)) / 60000;
//       if (minutesPassed < SILENCE_MINUTES) return;
      
//       user.conversationClosed = false;
//       user.conversationClosedAt = null;
//       await user.save();
      
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return sendMainMenu(ctxFn.provider, telefono, user.nombre, true);
//     }

//     // --------------------------------------------------
//     // 2. LÓGICA SALIDA Y VOLVER (GLOBAL)
//     // --------------------------------------------------
//     if (inputLower === 'salir' || input === '❌ salir') {
//       await User.updateOne({ telefono }, { 
//         conversationClosed: true, 
//         conversationClosedAt: new Date(),
//         inactivityStep: 2 
//       });
//       await ctxFn.state.clear();
//       return ctxFn.endFlow(goodbyeText);
//     }

//     if (inputLower === 'volver_menu' || inputLower === '⬅️ volver al menú' || inputLower === 'volver al menú') {
//       await ctxFn.state.update({ step: 'menuPrincipal' });
//       return sendMainMenu(ctxFn.provider, telefono, state.nombre || user.nombre);
//     }

//     // --------------------------------------------------
//     // 3. INICIO / PEDIR NOMBRE
//     // --------------------------------------------------
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });
//         return ctxFn.flowDynamic([
//           { body: `Hola 👋\nSoy el bot de Megadev.\nEstoy acá para ayudarte de forma rápida y simple.` },
//           { body: `Antes de empezar, ¿cómo te llamás?` }
//         ]);
//       }
      
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre: user.nombre });
//       return sendMainMenu(ctxFn.provider, telefono, user.nombre, true);
//     }

//     if (state.step === 'pedirNombre') {
//       const nombre = input;
//       await User.updateOne({ telefono }, { nombre });
//       await ctxFn.state.update({ step: 'menuPrincipal', nombre });
//       return sendMainMenu(ctxFn.provider, telefono, nombre);
//     }

//     // --------------------------------------------------
//     // 4. MENÚ PRINCIPAL
//     // --------------------------------------------------
//     if (state.step === 'menuPrincipal') {
      
//       // Opción: ¿Cómo ayuda un bot?
//       if (inputLower === 'como_ayuda' || inputLower === '¿cómo ayuda un bot?') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { body: howBotHelps_1 },
//           { body: howBotHelps_2 },
//           { body: howBotHelps_3 }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: ¿Cómo funciona?
//       if (inputLower === 'como_funciona' || inputLower === '¿cómo funciona?') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([{ body: howItWorks }]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: Ver ejemplos
//       if (inputLower === 'ver_ejemplos' || inputLower === 'ver ejemplos de bots') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
        
//         return ctxFn.provider.sendList(telefono, {
//           header: {
//             type: 'text',
//             text: '🎥 Ejemplos de bots'
//           },
//           body: {
//             text: 'Selecciona qué tipo de bot te gustaría ver en acción:'
//           },
//           footer: {
//             text: 'Elige una demo'
//           },
//           action: {
//             button: 'Ver demos',
//             sections: [
//               {
//                 title: 'Demos disponibles',
//                 rows: [
//                   {
//                     id: 'demo_barberia',
//                     title: '💈 Barbería',
//                     description: 'Sistema de turnos automático'
//                   },
//                   {
//                     id: 'demo_restaurante',
//                     title: '🍽️ Restaurante',
//                     description: 'Pedidos online'
//                   },
//                   {
//                     id: 'demo_inmobiliaria',
//                     title: '🏠 Inmobiliaria',
//                     description: 'Consultas de propiedades'
//                   }
//                 ]
//               },
//               {
//                 title: 'Navegación',
//                 rows: [
//                   {
//                     id: 'volver_menu',
//                     title: '⬅️ Volver al menú',
//                     description: 'Regresar al inicio'
//                   },
//                   {
//                     id: 'salir',
//                     title: '❌ Salir',
//                     description: 'Cerrar conversación'
//                   }
//                 ]
//               }
//             ]
//           }
//         });
//       }

//       // Opción: Precios
//       if (inputLower === 'precios' || inputLower === 'precios y planes') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([{ body: pricingText }]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: FAQ
//       if (inputLower === 'faq' || inputLower === 'preguntas frecuentes') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([{ body: faqText }]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }

//       // Opción: Quiero un bot
//       if (inputLower === 'quiero_bot' || inputLower === 'quiero un bot') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `📝 *Perfecto ${state.nombre}!*\n\n` +
//                   `Para armar un presupuesto personalizado, necesito algunos datos:\n\n` +
//                   `• ¿Qué tipo de negocio tenés?\n` +
//                   `• ¿Qué tareas querés automatizar?\n` +
//                   `• ¿Cuántos mensajes recibís por día aproximadamente?\n\n` +
//                   `Contame un poco sobre tu negocio 👇`
//           }
//         ]);
//         return sendNavigationButtons(ctxFn, 'O si preferís:');
//       }

//       // Opción: Hablar con persona
//       if (inputLower === 'hablar_persona' || inputLower === 'hablar con una persona') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `👤 *Contacto con asesor*\n\n` +
//                   `Te contactaremos a la brevedad.\n` +
//                   `Horarios de atención:\n` +
//                   `Lunes a Viernes: 9:00 - 18:00 hs\n\n` +
//                   `También podés escribirnos a:\n` +
//                   `📧 info@megadev.com.ar\n` +
//                   `📱 WhatsApp: +54 9 11 xxxx-xxxx`
//           }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Qué deseas hacer ahora?');
//       }
//     }

//     // --------------------------------------------------
//     // 5. LÓGICA DE VIDEOS (VER EJEMPLOS)
//     // --------------------------------------------------
//     if (state.step === 'verEjemplos') {
      
//       if (inputLower === 'demo_barberia' || inputLower === '💈 barbería') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `💈 *Bot para Barbería*\n\n` +
//                   `✔ Turnos automáticos\n` +
//                   `✔ Recordatorios por WhatsApp\n` +
//                   `✔ Cancelaciones y reprogramación\n` +
//                   `✔ Confirmaciones automáticas`
//           },
//           { media: demoVideos.barberia }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Deseas ver otro ejemplo?');
//       }

//       if (inputLower === 'demo_restaurante' || inputLower === '🍽️ restaurante') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `🍽️ *Bot para Restaurante*\n\n` +
//                   `✔ Pedidos online automáticos\n` +
//                   `✔ Menú interactivo con fotos\n` +
//                   `✔ Seguimiento de entregas\n` +
//                   `✔ Sistema de reservas`
//           },
//           { media: demoVideos.restaurante }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Deseas ver otro ejemplo?');
//       }

//       if (inputLower === 'demo_inmobiliaria' || inputLower === '🏠 inmobiliaria') {
//         await ctxFn.state.update({ step: 'esperandoAccion' });
//         await ctxFn.flowDynamic([
//           { 
//             body: `🏠 *Bot para Inmobiliaria*\n\n` +
//                   `✔ Consultas de propiedades\n` +
//                   `✔ Filtros por zona, precio y tipo\n` +
//                   `✔ Envío automático de fotos y videos\n` +
//                   `✔ Agendado de visitas`
//           },
//           { media: demoVideos.inmobiliaria }
//         ]);
//         return sendNavigationButtons(ctxFn, '¿Deseas ver otro ejemplo?');
//       }
//     }

//     // --------------------------------------------------
//     // 6. ESPERANDO ACCIÓN (después de mostrar información)
//     // --------------------------------------------------
//     if (state.step === 'esperandoAccion') {
//       // Ya se manejan los botones globalmente en la sección 2
//       // No necesita lógica adicional aquí
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
// // VIDEOS (Cloudinary) - ACTUALIZADOS
// // --------------------------------------------------
// const demoVideos = {
//   barberia: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
//   restaurante: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1768153513/Mi_video54_jbgods.mp4',
//   inmobiliaria: 'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766344730/Mi_video53_po01aw.mp4'
// };

// // --------------------------------------------------
// // MENÚS Y TEXTOS
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

// const tipText = `💡  Respondé solo con el *número* de la opción que quieras elegir.`;

// const commonButtons = [{ body: 'Volver al menú' }, { body: 'Salir' }];

// // --- TEXTOS INFORMACIÓN ---
// const howBotHelps_1 =
//   `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
//   `Hoy, entrar a un sitio web implica cargar la página, buscar un formulario, completar datos y muchas veces crear una cuenta o loguearse.\n\n` +
//   `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
//   `Con un bot en WhatsApp eso no pasa. El cliente ya está logueado, ya confía en la app y ya sabe usarla.\n\n` +
//   `Solo escribe y obtiene respuesta inmediata.`;

// const howBotHelps_2 =
//   `✔ Responde consultas al instante, incluso de noche o fines de semana\n\n` +
//   `✔ Evita perder clientes por respuestas tardías\n\n` +
//   `✔ Atiende preguntas repetitivas sin intervención humana\n\n` +
//   `✔ Funciona 24/7, sin que estés pegado al teléfono`;

// const howBotHelps_3 = `📲 WhatsApp ya está en el teléfono del cliente.`;

// const howItWorks = 
//   `⚙️ *¿Cómo funciona?*\n\n` +
//   `• El cliente escribe a tu WhatsApp como si hablara con una persona.\n` +
//   `• El bot le muestra opciones claras y responde automáticamente.\n` +
//   `• Todas las respuestas se basan en la información que vos cargás previamente.\n\n` +
//   `💻 *Panel de Control:*\n` +
//   `Tenés un panel simple y fácil de usar. Desde ahí cargás precios, servicios, horarios y mensajes. No necesitás programar ni tocar código.\n\n` +
//   `Si cambiás un dato, el bot lo usa al instante. Cuando una consulta lo requiere, pasa la charla a una persona real.`;

// const pricingText = 
//   `💳 *Planes y Precios*\n\n` +
//   `🔹 *Plan Inicial:* Automatización de FAQ y bienvenida.\n` +
//   `🔹 *Plan Profesional:* Toma de datos, panel de control y gestión de clientes.\n` +
//   `🔹 *Plan Premium:* Integraciones con sistemas de turnos, pagos y envíos.\n\n` +
//   `👉 Para un presupuesto exacto, selecciona la opción *6*.`;

// const faqText = 
//   `❓ *Preguntas frecuentes*\n\n` +
//   `• *¿Necesito programar?* No, se entrega listo para usar.\n` +
//   `• *¿Funciona 24/7?* Sí, responde siempre.\n` +
//   `• *¿Se puede personalizar?* Totalmente, a tu gusto.\n` +
//   `• *¿Y si necesito cambios?* El bot puede crecer y ajustarse con tu negocio.`;

// const goodbyeText = `👋 Perfecto. Cuando quieras, volvés a escribir.\n¡Que tengas un excelente día!`;

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

//     // 2. LOGICA SALIDA Y VOLVER
//     if (inputLower === 'salir' || inputLower === 'x') {
//         await User.updateOne({ telefono }, { conversationClosed: true, conversationClosedAt: new Date() });
//         await ctxFn.state.clear();
//         return ctxFn.endFlow(goodbyeText);
//     }

//     if (inputLower === 'volver al menú' || inputLower === 'a') {
//         await ctxFn.state.update({ step: 'menuPrincipal' });
//         return ctxFn.flowDynamic([{ body: menuOptionsText(user.nombre) }, { body: tipText, buttons: [{ body: 'Salir' }] }]);
//     }

//     // 3. INICIO / PEDIR NOMBRE
//     if (!state.step) {
//       if (!user.nombre) {
//         await ctxFn.state.update({ step: 'pedirNombre' });
//         return ctxFn.flowDynamic([
//           { body: `Hola 👋\nSoy el bot de Megadev.\nEstoy acá para ayudarte de forma rápida y simple.` },
//           { body: `Antes de empezar, ¿cómo te llamás?` }
//         ]);
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

//     // 4. MENÚ PRINCIPAL
//     if (state.step === 'menuPrincipal') {
//       if (input === '1') {
//         await ctxFn.flowDynamic([
//           { body: howBotHelps_1 }, { body: howBotHelps_2 }, { body: howBotHelps_3 },
//           { body: '¿Qué deseas hacer?', buttons: commonButtons }
//         ]);
//         return;
//       }

//       if (input === '2') {
//         return ctxFn.flowDynamic([{ body: howItWorks, buttons: commonButtons }]);
//       }

//       if (input === '3') {
//         await ctxFn.state.update({ step: 'verEjemplos' });
//         return ctxFn.flowDynamic([{ 
//             body: `🤖 *Ejemplos de bots*\n\n1️⃣ Barbería\n2️⃣ Restaurante\n3️⃣ Inmobiliaria`,
//             buttons: commonButtons
//         }]);
//       }

//       if (input === '4') {
//         return ctxFn.flowDynamic([{ body: pricingText, buttons: commonButtons }]);
//       }

//       if (input === '5') {
//         return ctxFn.flowDynamic([{ body: faqText, buttons: commonButtons }]);
//       }
//     }

//     // 5. LÓGICA DE VIDEOS
//     if (state.step === 'verEjemplos') {
//       const videoMap = { '1': 'barberia', '2': 'restaurante', '3': 'inmobiliaria' };
//       if (videoMap[input]) {
//         return ctxFn.flowDynamic([
//           { body: `🎥 Mostrando demo de ${videoMap[input]}...` },
//           { media: demoVideos[videoMap[input]] },
//           { body: '¿Deseas ver otro ejemplo?', buttons: commonButtons }
//         ]);
//       }
//     }
//   }
// );

// export { welcomeFlow };














import { addKeyword, EVENTS } from '@builderbot/bot';
import User from '../models/user.js';

// --------------------------------------------------
// CONFIG
// --------------------------------------------------
const SILENCE_MINUTES = 10;

// --------------------------------------------------
// VIDEOS (Cloudinary)
// --------------------------------------------------
const demoVideos = {
  barberia:
    'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
  restaurante:
    'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4',
  atencion:
    'https://res.cloudinary.com/dsk4fft6r/video/upload/v1766284036/Mi_video51_uv4hem.mp4'
};

// --------------------------------------------------
// TEXTO: CÓMO AYUDA
// --------------------------------------------------
const howBotHelps_1 =
  `🤖 *¿Cómo un bot puede ayudar a tu negocio?*\n\n` +
  `Hoy, entrar a un sitio web implica cargar la página,\n` +
  `buscar un formulario, completar datos y muchas veces\n` +
  `crear una cuenta o loguearse.\n\n` +
  `Cada paso extra es una excusa para que el cliente se vaya.\n\n` +
  `Con un bot en WhatsApp eso no pasa.\n` +
  `El cliente ya está logueado, ya confía en la app\n` +
  `y ya sabe usarla.\n\n` +
  `Solo escribe y obtiene respuesta inmediata.`;

const howBotHelps_2 =
  `✔ Responde consultas al instante,\n` +
  `   incluso de noche o fines de semana\n\n` +
  `✔ Evita perder clientes por respuestas tardías\n\n` +
  `✔ Atiende preguntas repetitivas\n` +
  `   sin intervención humana\n\n` +
  `✔ Funciona 24/7,\n` +
  `   sin que estés pegado al teléfono`;

const howBotHelps_3 =
  `📲 WhatsApp ya está en el teléfono del cliente.`;

const goodbyeText =
  `👋 Perfecto\n` +
  `Cuando quieras, volvés a escribir.\n` +
  `¡Que tengas un excelente día!`;

// --------------------------------------------------
// FLOW
// --------------------------------------------------
const welcomeFlow = addKeyword(EVENTS.WELCOME).addAction(
  async (ctx, ctxFn) => {
    const state = (await ctxFn.state.getMyState()) || {};
    const input = ctx.body?.trim().toLowerCase();
    const telefono = ctx.from;

    let user = await User.findOneAndUpdate(
      { telefono },
      {
        telefono,
        lastInteractionAt: new Date(),
        inactivityStep: 0
      },
      { upsert: true, new: true }
    );

    // --------------------------------------------------
    // SILENCIO POST-CIERRE
    // --------------------------------------------------
    if (user.conversationClosed) {
      const minutesPassed =
        (Date.now() - new Date(user.conversationClosedAt)) / 60000;

      if (minutesPassed < SILENCE_MINUTES) return;

      user.conversationClosed = false;
      user.conversationClosedAt = null;
      user.inactivityStep = 0;
      await user.save();

      await ctxFn.state.update({
        step: 'menuPrincipal',
        nombre: user.nombre
      });

      // Menú principal con lista
      return ctxFn.provider.sendList(telefono, {
        header: {
          type: 'text',
          text: '🤖 Megadev Bot'
        },
        body: {
          text: `👋 Hola ${user.nombre}!\nQué bueno verte de nuevo 😊\n\n¿En qué puedo ayudarte?`
        },
        footer: {
          text: 'Selecciona una opción'
        },
        action: {
          button: 'Ver opciones',
          sections: [
            {
              title: 'Servicios principales',
              rows: [
                {
                  id: 'quiero_bot',
                  title: 'Quiero un bot',
                  description: 'Información para tu negocio'
                },
                {
                  id: 'ver_ejemplos',
                  title: 'Ver ejemplos',
                  description: 'Demos de bots funcionando'
                },
                {
                  id: 'precios',
                  title: 'Precios y planes',
                  description: 'Consulta nuestras tarifas'
                },
                {
                  id: 'como_ayuda',
                  title: '¿Cómo ayuda un bot?',
                  description: 'Beneficios para tu negocio'
                },
                {
                  id: 'hablar_persona',
                  title: 'Hablar con una persona',
                  description: 'Contacto con un asesor'
                }
              ]
            },
            {
              title: 'Opciones adicionales',
              rows: [
                {
                  id: 'salir',
                  title: 'Salir',
                  description: 'Cerrar conversación'
                }
              ]
            }
          ]
        }
      });
    }

    // --------------------------------------------------
    // INICIO
    // --------------------------------------------------
    if (!state.step) {
      if (!user.nombre) {
        await ctxFn.state.update({ step: 'pedirNombre' });

        await ctxFn.flowDynamic([
          {
            body:
              `Hola 👋\n` +
              `Soy el bot de Megadev.\n` +
              `Estoy acá para ayudarte con información, servicios y consultas de forma rápida y simple.`
          },
          { body: `Antes de empezar, ¿cómo te llamás?` }
        ]);
        return;
      }

      await ctxFn.state.update({
        step: 'menuPrincipal',
        nombre: user.nombre
      });

      // Menú principal con lista
      return ctxFn.provider.sendList(telefono, {
        header: {
          type: 'text',
          text: '🤖 Megadev Bot'
        },
        body: {
          text: `👋 Hola ${user.nombre}!\nQué bueno verte de nuevo 😊\n\n¿En qué puedo ayudarte?`
        },
        footer: {
          text: 'Selecciona una opción'
        },
        action: {
          button: 'Ver opciones',
          sections: [
            {
              title: 'Servicios principales',
              rows: [
                {
                  id: 'quiero_bot',
                  title: 'Quiero un bot',
                  description: 'Información para tu negocio'
                },
                {
                  id: 'ver_ejemplos',
                  title: 'Ver ejemplos',
                  description: 'Demos de bots funcionando'
                },
                {
                  id: 'precios',
                  title: 'Precios y planes',
                  description: 'Consulta nuestras tarifas'
                },
                {
                  id: 'como_ayuda',
                  title: '¿Cómo ayuda un bot?',
                  description: 'Beneficios para tu negocio'
                },
                {
                  id: 'hablar_persona',
                  title: 'Hablar con una persona',
                  description: 'Contacto con un asesor'
                }
              ]
            },
            {
              title: 'Opciones adicionales',
              rows: [
                {
                  id: 'salir',
                  title: 'Salir',
                  description: 'Cerrar conversación'
                }
              ]
            }
          ]
        }
      });
    }

    // --------------------------------------------------
    // PEDIR NOMBRE
    // --------------------------------------------------
    if (state.step === 'pedirNombre') {
      const nombre = ctx.body?.trim();

      await User.updateOne(
        { telefono },
        { nombre }
      );

      await ctxFn.state.update({
        step: 'menuPrincipal',
        nombre
      });

      // Menú principal con lista
      return ctxFn.provider.sendList(telefono, {
        header: {
          type: 'text',
          text: '🤖 Megadev Bot'
        },
        body: {
          text: `Perfecto ${nombre} 😊\n\n¿En qué puedo ayudarte?`
        },
        footer: {
          text: 'Selecciona una opción'
        },
        action: {
          button: 'Ver opciones',
          sections: [
            {
              title: 'Servicios principales',
              rows: [
                {
                  id: 'quiero_bot',
                  title: 'Quiero un bot',
                  description: 'Información para tu negocio'
                },
                {
                  id: 'ver_ejemplos',
                  title: 'Ver ejemplos',
                  description: 'Demos de bots funcionando'
                },
                {
                  id: 'precios',
                  title: 'Precios y planes',
                  description: 'Consulta nuestras tarifas'
                },
                {
                  id: 'como_ayuda',
                  title: '¿Cómo ayuda un bot?',
                  description: 'Beneficios para tu negocio'
                },
                {
                  id: 'hablar_persona',
                  title: 'Hablar con una persona',
                  description: 'Contacto con un asesor'
                }
              ]
            },
            {
              title: 'Opciones adicionales',
              rows: [
                {
                  id: 'salir',
                  title: 'Salir',
                  description: 'Cerrar conversación'
                }
              ]
            }
          ]
        }
      });
    }

    // --------------------------------------------------
    // MENÚ PRINCIPAL
    // --------------------------------------------------
    if (state.step === 'menuPrincipal') {
      if (input === 'ver_ejemplos' || input === 'ver ejemplos') {
        await ctxFn.state.update({ step: 'verEjemplos' });
        
        return ctxFn.provider.sendList(telefono, {
          header: {
            type: 'text',
            text: '🤖 Ejemplos de bots'
          },
          body: {
            text: 'Selecciona qué tipo de bot te gustaría ver en acción:'
          },
          footer: {
            text: 'Demos disponibles'
          },
          action: {
            button: 'Ver demos',
            sections: [
              {
                title: 'Ejemplos disponibles',
                rows: [
                  {
                    id: 'demo_barberia',
                    title: '💈 Bot de barbería',
                    description: 'Turnos automáticos'
                  },
                  {
                    id: 'demo_restaurante',
                    title: '🍽️ Bot de restaurante',
                    description: 'Pedidos online'
                  },
                  {
                    id: 'demo_atencion',
                    title: '💬 Bot de atención',
                    description: 'Soporte automático'
                  }
                ]
              },
              {
                title: 'Navegación',
                rows: [
                  {
                    id: 'volver',
                    title: '⬅️ Volver al menú',
                    description: 'Regresar'
                  },
                  {
                    id: 'salir',
                    title: '❌ Salir',
                    description: 'Cerrar conversación'
                  }
                ]
              }
            ]
          }
        });
      }

      if (input === 'como_ayuda' || input === '¿cómo ayuda un bot?' || input === 'como ayuda un bot') {
        await ctxFn.state.update({ step: 'comoAyuda' });
        
        await ctxFn.flowDynamic([
          { body: howBotHelps_1 },
          { body: howBotHelps_2 },
          { body: howBotHelps_3 }
        ]);

        return ctxFn.provider.sendButtons(telefono, {
          body: {
            text: '¿Qué te gustaría hacer ahora?'
          },
          action: {
            buttons: [
              {
                type: 'reply',
                reply: {
                  id: 'volver',
                  title: '⬅️ Volver al menú'
                }
              },
              {
                type: 'reply',
                reply: {
                  id: 'salir',
                  title: '❌ Salir'
                }
              }
            ]
          }
        });
      }

      if (input === 'salir') {
        await User.updateOne(
          { telefono },
          {
            conversationClosed: true,
            conversationClosedAt: new Date(),
            inactivityStep: 2
          }
        );
        await ctxFn.state.clear();
        return ctxFn.endFlow(goodbyeText);
      }

      // Opción inválida - mostrar menú nuevamente
      return ctxFn.provider.sendList(telefono, {
        header: {
          type: 'text',
          text: '❌ Opción no válida'
        },
        body: {
          text: `Por favor, selecciona una opción válida del menú:`
        },
        footer: {
          text: 'Selecciona una opción'
        },
        action: {
          button: 'Ver opciones',
          sections: [
            {
              title: 'Servicios principales',
              rows: [
                {
                  id: 'quiero_bot',
                  title: 'Quiero un bot',
                  description: 'Información para tu negocio'
                },
                {
                  id: 'ver_ejemplos',
                  title: 'Ver ejemplos',
                  description: 'Demos de bots funcionando'
                },
                {
                  id: 'precios',
                  title: 'Precios y planes',
                  description: 'Consulta nuestras tarifas'
                },
                {
                  id: 'como_ayuda',
                  title: '¿Cómo ayuda un bot?',
                  description: 'Beneficios para tu negocio'
                },
                {
                  id: 'hablar_persona',
                  title: 'Hablar con una persona',
                  description: 'Contacto con un asesor'
                }
              ]
            },
            {
              title: 'Opciones adicionales',
              rows: [
                {
                  id: 'salir',
                  title: 'Salir',
                  description: 'Cerrar conversación'
                }
              ]
            }
          ]
        }
      });
    }

    // --------------------------------------------------
    // CÓMO AYUDA
    // --------------------------------------------------
    if (state.step === 'comoAyuda') {
      if (input === 'volver' || input === '⬅️ volver al menú') {
        await ctxFn.state.update({ step: 'menuPrincipal' });
        
        return ctxFn.provider.sendList(telefono, {
          header: {
            type: 'text',
            text: '🤖 Megadev Bot'
          },
          body: {
            text: `Perfecto 👍\nVolvemos al menú. ¿Qué te gustaría hacer?`
          },
          footer: {
            text: 'Selecciona una opción'
          },
          action: {
            button: 'Ver opciones',
            sections: [
              {
                title: 'Servicios principales',
                rows: [
                  {
                    id: 'quiero_bot',
                    title: 'Quiero un bot',
                    description: 'Información para tu negocio'
                  },
                  {
                    id: 'ver_ejemplos',
                    title: 'Ver ejemplos',
                    description: 'Demos de bots funcionando'
                  },
                  {
                    id: 'precios',
                    title: 'Precios y planes',
                    description: 'Consulta nuestras tarifas'
                  },
                  {
                    id: 'como_ayuda',
                    title: '¿Cómo ayuda un bot?',
                    description: 'Beneficios para tu negocio'
                  },
                  {
                    id: 'hablar_persona',
                    title: 'Hablar con una persona',
                    description: 'Contacto con un asesor'
                  }
                ]
              },
              {
                title: 'Opciones adicionales',
                rows: [
                  {
                    id: 'salir',
                    title: 'Salir',
                    description: 'Cerrar conversación'
                  }
                ]
              }
            ]
          }
        });
      }

      if (input === 'salir' || input === '❌ salir') {
        await User.updateOne(
          { telefono },
          {
            conversationClosed: true,
            conversationClosedAt: new Date(),
            inactivityStep: 2
          }
        );
        await ctxFn.state.clear();
        return ctxFn.endFlow(goodbyeText);
      }

      return ctxFn.endFlow('❌ Opción inválida. Escribe "volver" o "salir".');
    }

    // --------------------------------------------------
    // VER EJEMPLOS
    // --------------------------------------------------
    if (state.step === 'verEjemplos') {
      if (input === 'demo_barberia' || input === '💈 bot de barbería') {
        await ctxFn.flowDynamic([
          {
            body:
              `💈 *Bot para barbería*\n\n` +
              `✔ Turnos automáticos\n` +
              `✔ Cancelaciones\n` +
              `✔ Confirmaciones por WhatsApp`
          },
          { media: demoVideos.barberia }
        ]);

        return ctxFn.provider.sendButtons(telefono, {
          body: {
            text: '¿Qué te gustaría hacer ahora?'
          },
          action: {
            buttons: [
              {
                type: 'reply',
                reply: {
                  id: 'volver',
                  title: '⬅️ Volver al menú'
                }
              },
              {
                type: 'reply',
                reply: {
                  id: 'salir',
                  title: '❌ Salir'
                }
              }
            ]
          }
        });
      }

      if (input === 'demo_restaurante' || input === '🍽️ bot de restaurante') {
        await ctxFn.flowDynamic([
          {
            body:
              `🍽️ *Bot para restaurante*\n\n` +
              `✔ Pedidos online\n` +
              `✔ Menú interactivo\n` +
              `✔ Seguimiento de entregas`
          },
          { media: demoVideos.restaurante }
        ]);

        return ctxFn.provider.sendButtons(telefono, {
          body: {
            text: '¿Qué te gustaría hacer ahora?'
          },
          action: {
            buttons: [
              {
                type: 'reply',
                reply: {
                  id: 'volver',
                  title: '⬅️ Volver al menú'
                }
              },
              {
                type: 'reply',
                reply: {
                  id: 'salir',
                  title: '❌ Salir'
                }
              }
            ]
          }
        });
      }

      if (input === 'demo_atencion' || input === '💬 bot de atención') {
        await ctxFn.flowDynamic([
          {
            body:
              `💬 *Bot de atención automática*\n\n` +
              `✔ Respuestas instantáneas\n` +
              `✔ FAQ automatizado\n` +
              `✔ Derivación a humanos`
          },
          { media: demoVideos.atencion }
        ]);

        return ctxFn.provider.sendButtons(telefono, {
          body: {
            text: '¿Qué te gustaría hacer ahora?'
          },
          action: {
            buttons: [
              {
                type: 'reply',
                reply: {
                  id: 'volver',
                  title: '⬅️ Volver al menú'
                }
              },
              {
                type: 'reply',
                reply: {
                  id: 'salir',
                  title: '❌ Salir'
                }
              }
            ]
          }
        });
      }

      if (input === 'volver' || input === '⬅️ volver al menú') {
        await ctxFn.state.update({ step: 'menuPrincipal' });
        
        return ctxFn.provider.sendList(telefono, {
          header: {
            type: 'text',
            text: '🤖 Megadev Bot'
          },
          body: {
            text: `Perfecto 👍\nVolvemos al menú. ¿Qué te gustaría hacer?`
          },
          footer: {
            text: 'Selecciona una opción'
          },
          action: {
            button: 'Ver opciones',
            sections: [
              {
                title: 'Servicios principales',
                rows: [
                  {
                    id: 'quiero_bot',
                    title: 'Quiero un bot',
                    description: 'Información para tu negocio'
                  },
                  {
                    id: 'ver_ejemplos',
                    title: 'Ver ejemplos',
                    description: 'Demos de bots funcionando'
                  },
                  {
                    id: 'precios',
                    title: 'Precios y planes',
                    description: 'Consulta nuestras tarifas'
                  },
                  {
                    id: 'como_ayuda',
                    title: '¿Cómo ayuda un bot?',
                    description: 'Beneficios para tu negocio'
                  },
                  {
                    id: 'hablar_persona',
                    title: 'Hablar con una persona',
                    description: 'Contacto con un asesor'
                  }
                ]
              },
              {
                title: 'Opciones adicionales',
                rows: [
                  {
                    id: 'salir',
                    title: 'Salir',
                    description: 'Cerrar conversación'
                  }
                ]
              }
            ]
          }
        });
      }

      if (input === 'salir' || input === '❌ salir') {
        await User.updateOne(
          { telefono },
          {
            conversationClosed: true,
            conversationClosedAt: new Date(),
            inactivityStep: 2
          }
        );
        await ctxFn.state.clear();
        return ctxFn.endFlow(goodbyeText);
      }
    }
  }
);

export { welcomeFlow };
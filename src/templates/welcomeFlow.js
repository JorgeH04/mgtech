

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
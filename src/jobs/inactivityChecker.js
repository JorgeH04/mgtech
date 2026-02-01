import cron from 'node-cron';
import Profile from '../models/user.js';
import { providerMeta, providerBaileys } from '../provider/index.js';
import { config } from '../config/index.js';

const provider =
  config.provider === 'meta' ? providerMeta : providerBaileys;

export const startInactivityChecker = () => {
  cron.schedule('*/1 * * * *', async () => {
    const now = new Date();

    const profiles = await Profile.find({
      inactivityStep: { $lt: 2 }
    });

    for (const p of profiles) {
      const diffMin = (now - p.lastInteractionAt) / 60000;

      // ⏰ 3 minutos → repreguntar
      if (diffMin >= 3 && p.inactivityStep === 0) {
        await provider.sendText(
          p.telefono,
          '¿Seguís ahí? Puedo ayudarte a reservar un turno 💈'
        );

        p.inactivityStep = 1;
        await p.save();
      }

      // ⏰ 7 minutos → despedir
      if (diffMin >= 7 && p.inactivityStep === 1) {
        await provider.sendText(
          p.telefono,
          'Perfecto 😊 cuando quieras volvés a escribir. ¡Que tengas buen día!'
        );

        p.inactivityStep = 2;
        await p.save();
      }
    }
  });
};

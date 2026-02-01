import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  telefono: { type: String, unique: true },
  nombre: String,
  email: String,

  // -------- Inactividad ----------
  lastInteractionAt: {
    type: Date,
    default: Date.now
  },
  inactivityStep: {
    type: Number,
    default: 0 // 0 = activo | 1 = repreguntado | 2 = cerrado por inactividad
  },

  // -------- Cierre manual ----------
  conversationClosed: {
    type: Boolean,
    default: false
  },
  conversationClosedAt: {
    type: Date,
    default: null
  },

  creadoEn: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);

import { Injectable }  from '@angular/core';
import { Preferences } from '@capacitor/preferences';
// my interfaces
import { AppSettings }      from '../interfaces/types';
import { DEFAULT_SETTINGS } from '../interfaces/types'; 

@Injectable({ providedIn: 'root' })
export class SettingsFromToDDService {

  // Chargement des paramètres depuis le disque
  async get(): Promise<AppSettings> {
    const { value } = await Preferences.get({ key: 'settings' });
    if (value) {
      try {
        const parsed: AppSettings = JSON.parse(value);
        return parsed;
      } catch (e) {
        console.error('Erreur lors du parsing des paramètres', e);
      }
    }
    // Si pas de valeur ou erreur, retourner DEFAULT_SETTINGS
    return DEFAULT_SETTINGS;
  }

  // Enregistrement des paramètres dans le disque
  async set(settings: AppSettings): Promise<void> {
    await Preferences.set({ key: 'settings', value: JSON.stringify(settings) });
  }
}
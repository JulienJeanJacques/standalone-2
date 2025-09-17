#!/usr/bin/env python3
import os
import re

# Chemin absolu vers le dossier components
PROJECT_ROOT = '/Volumes/myData/_Ionic-Charles-v5/5_astrodidact-V5-standalone-2'
COMPONENTS_DIR = os.path.join(PROJECT_ROOT, 'src/app/components/unity')

# Chemin absolu du fichier de sortie
OUTPUT_FILE = os.path.join(PROJECT_ROOT, 'src/app/component-map.ts')

def main():
    component_map = {}

    for root, dirs, files in os.walk(COMPONENTS_DIR):
        for filename in files:
            if filename.endswith('.ts'):
                # d1-e1q-en.ts
                match = re.match(r'^([dce])(\d+)-e(\d+)([qri])-(en|fr)\.ts$', filename)
                if not match:
                    continue
                level, chapter, question, nature, lang = match.groups()

                # clef : d1_1q_en
                key = f"{level}{chapter}_{question}{nature}_{lang}"

                # Nom du composant exporté
                export_name = f"{level.upper()}{chapter}E{question}{nature}{lang.capitalize()}Component"
                # Chemin relatif entre src/app et le fichier composant
                # src/app est : PROJECT_ROOT + '/src/app'
                file_full_path = os.path.join(root, filename)
                src_app_dir = os.path.join(PROJECT_ROOT, 'src/app')
                rel_path = os.path.relpath(file_full_path, src_app_dir).replace('\\', '/')
                rel_path_no_ext = rel_path[:-3]  # remove '.ts'

                # ajout
                component_map[key] = f"() => import('./{rel_path_no_ext}').then(m => m.{export_name})"

    # Génération du fichier TypeScript
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)  # Crée le dossier si besoin
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write('export const ComponentMap = {\n')
        for key, import_line in sorted(component_map.items()):
            f.write(f"  '{key}': {import_line},\n")
        f.write('};\n')

    print(f"✅ Component map generated with {len(component_map)} entries → {OUTPUT_FILE}")

if __name__ == '__main__':
    main()


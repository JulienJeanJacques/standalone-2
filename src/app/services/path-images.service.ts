import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {
  private appPath: string = 'assets/rscUnity/';

  constructor() { }

  setPath(path: string) {
    this.appPath = path;
  }

  getPath(localPath:string): string {
    return this.appPath + localPath;
  }
}

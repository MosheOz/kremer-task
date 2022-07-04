import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { fileNames } from './constants/file-names';
import { IEdid } from './types/edid.interface';

@Injectable({
  providedIn: 'root',
})
export class EDIDService {
  constructor(private http: HttpClient) {
    this.getData();
  }

  async getData(): Promise<IEdid[]> {
    return await Promise.all(
      fileNames.map(
        (fileName: string) =>
          firstValueFrom(
            this.http.get(`/assets/JSONmonitors/${fileName}.json`)
          ) as unknown as IEdid
      )
    );
  }
}

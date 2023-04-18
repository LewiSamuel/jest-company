export interface iPost{
    id: number | string,
  Img?: string | "",
  Description?: string | "",
  Author?: number | 0,
}

export interface iPostSave{ 
  Img?: string | "",
  Description?: string | "",
  Author?: number | 0,
}

export interface iPostSearch{ 
  id: number | string,
  Img?: string | "",
  Description?: string | "",
  Author?: number | 0,
}


export interface iPostUpdateField{
  id: number | string,
  field: string,
  value: string | number | boolean,
}

export interface iPostUpdate{
  id: number, 
  Img?: string | "",
  Description?: string | "",
  Author?: number | 0,
}

export interface iPostList{ 
  id?: number,
  Img?: string | "",
  Description?: string | "",
  Author?: number | 0,
}

export interface iPostListOne{
  id: number, 
  Img?: string | "",
  Description?: string | "",
  Author?: number | 0,
}

export interface iPostDelete{
  id: number | string
}

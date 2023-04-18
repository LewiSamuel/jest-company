export interface iUser{
    id: number | string,
  Name?: string | "",
  Email?: string | "",
  Password?: string | "",
}

export interface iUserAuth{
  Email?: string | "",
  Password?: string | "",
}

export interface iUserSave{ 
  Name?: string | "",
  Email?: string | "",
  Password?: string | "",
}

export interface iUserSearch{ 
  id: number | string,
  Name?: string | "",
  Email?: string | "",
  Password?: string | "",
}


export interface iUserUpdateField{
  id: number | string,
  field: string,
  value: string | number | boolean,
}

export interface iUserUpdate{
  id: number, 
  Name?: string | "",
  Email?: string | "",
  Password?: string | "",
}

export interface iUserList{ 
  id?: number,
  Name?: string | "",
  Email?: string | "",
  Password?: string | "",
}

export interface iUserListOne{
  id: number, 
  Name?: string | "",
  Email?: string | "",
  Password?: string | "",
}

export interface iUserDelete{
  id: number | string
}

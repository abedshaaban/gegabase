export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      templates: {
        Row: {
          body: Json
          id: string
          name: string
          parent: string
        }
        Insert: {
          body?: Json
          id: string
          name?: string
          parent: string
        }
        Update: {
          body?: Json
          id?: string
          name?: string
          parent?: string
        }
        Relationships: [
          {
            foreignKeyName: 'templates_parent_fkey'
            columns: ['parent']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          first_name: string | null
          id: string
          last_name: string | null
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          first_name?: string | null
          id: string
          last_name?: string | null
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

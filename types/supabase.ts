export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    graphql_public: {
        Tables: {
            [_ in never]: never
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            graphql: {
                Args: {
                    operationName?: string
                    query?: string
                    variables?: Json
                    extensions?: Json
                }
                Returns: Json
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
    public: {
        Tables: {
            children_entries: {
                Row: {
                    children_uid: string
                    content: string | null
                    created_at: string | null
                    id: number
                    title: string | null
                    username: string
                }
                Insert: {
                    children_uid: string
                    content?: string | null
                    created_at?: string | null
                    id?: number
                    title?: string | null
                    username: string
                }
                Update: {
                    children_uid?: string
                    content?: string | null
                    created_at?: string | null
                    id?: number
                    title?: string | null
                    username?: string
                }
            }
            entries: {
                Row: {
                    children_uid: string
                    content: string | null
                    create_time: string | null
                    id: number
                    situation: string | null
                    time: string
                    title: string
                    user_id: string | null
                    username: string
                }
                Insert: {
                    children_uid?: string
                    content?: string | null
                    create_time?: string | null
                    id?: number
                    situation?: string | null
                    time: string
                    title: string
                    user_id?: string | null
                    username: string
                }
                Update: {
                    children_uid?: string
                    content?: string | null
                    create_time?: string | null
                    id?: number
                    situation?: string | null
                    time?: string
                    title?: string
                    user_id?: string | null
                    username?: string
                }
            }
            user: {
                Row: {
                    created_at: string | null
                    description: string | null
                    first_name: string
                    id: string
                    last_name: string | null
                    username: string
                }
                Insert: {
                    created_at?: string | null
                    description?: string | null
                    first_name: string
                    id: string
                    last_name?: string | null
                    username: string
                }
                Update: {
                    created_at?: string | null
                    description?: string | null
                    first_name?: string
                    id?: string
                    last_name?: string | null
                    username?: string
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            http: {
                Args: {
                    request: Database["public"]["CompositeTypes"]["http_request"]
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_delete:
            | {
                Args: {
                    uri: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            | {
                Args: {
                    uri: string
                    content: string
                    content_type: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_get:
            | {
                Args: {
                    uri: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            | {
                Args: {
                    uri: string
                    data: Json
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_head: {
                Args: {
                    uri: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_header: {
                Args: {
                    field: string
                    value: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_header"]
            }
            http_list_curlopt: {
                Args: Record<PropertyKey, never>
                Returns: {
                    curlopt: string
                    value: string
                }[]
            }
            http_patch: {
                Args: {
                    uri: string
                    content: string
                    content_type: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_post:
            | {
                Args: {
                    uri: string
                    data: Json
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            | {
                Args: {
                    uri: string
                    content: string
                    content_type: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_put: {
                Args: {
                    uri: string
                    content: string
                    content_type: string
                }
                Returns: Database["public"]["CompositeTypes"]["http_response"]
            }
            http_reset_curlopt: {
                Args: Record<PropertyKey, never>
                Returns: boolean
            }
            http_set_curlopt: {
                Args: {
                    curlopt: string
                    value: string
                }
                Returns: boolean
            }
            urlencode:
            | {
                Args: {
                    string: string
                }
                Returns: string
            }
            | {
                Args: {
                    data: Json
                }
                Returns: string
            }
            | {
                Args: {
                    string: string
                }
                Returns: string
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            http_header: {
                field: string
                value: string
            }
            http_request: {
                method: unknown
                uri: string
                headers: unknown
                content_type: string
                content: string
            }
            http_response: {
                status: number
                content_type: string
                headers: unknown
                content: string
            }
        }
    }
    storage: {
        Tables: {
            buckets: {
                Row: {
                    allowed_mime_types: string[] | null
                    avif_autodetection: boolean | null
                    created_at: string | null
                    file_size_limit: number | null
                    id: string
                    name: string
                    owner: string | null
                    public: boolean | null
                    updated_at: string | null
                }
                Insert: {
                    allowed_mime_types?: string[] | null
                    avif_autodetection?: boolean | null
                    created_at?: string | null
                    file_size_limit?: number | null
                    id: string
                    name: string
                    owner?: string | null
                    public?: boolean | null
                    updated_at?: string | null
                }
                Update: {
                    allowed_mime_types?: string[] | null
                    avif_autodetection?: boolean | null
                    created_at?: string | null
                    file_size_limit?: number | null
                    id?: string
                    name?: string
                    owner?: string | null
                    public?: boolean | null
                    updated_at?: string | null
                }
            }
            migrations: {
                Row: {
                    executed_at: string | null
                    hash: string
                    id: number
                    name: string
                }
                Insert: {
                    executed_at?: string | null
                    hash: string
                    id: number
                    name: string
                }
                Update: {
                    executed_at?: string | null
                    hash?: string
                    id?: number
                    name?: string
                }
            }
            objects: {
                Row: {
                    bucket_id: string | null
                    created_at: string | null
                    id: string
                    last_accessed_at: string | null
                    metadata: Json | null
                    name: string | null
                    owner: string | null
                    path_tokens: string[] | null
                    updated_at: string | null
                    version: string | null
                }
                Insert: {
                    bucket_id?: string | null
                    created_at?: string | null
                    id?: string
                    last_accessed_at?: string | null
                    metadata?: Json | null
                    name?: string | null
                    owner?: string | null
                    path_tokens?: string[] | null
                    updated_at?: string | null
                    version?: string | null
                }
                Update: {
                    bucket_id?: string | null
                    created_at?: string | null
                    id?: string
                    last_accessed_at?: string | null
                    metadata?: Json | null
                    name?: string | null
                    owner?: string | null
                    path_tokens?: string[] | null
                    updated_at?: string | null
                    version?: string | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            can_insert_object: {
                Args: {
                    bucketid: string
                    name: string
                    owner: string
                    metadata: Json
                }
                Returns: undefined
            }
            extension: {
                Args: {
                    name: string
                }
                Returns: string
            }
            filename: {
                Args: {
                    name: string
                }
                Returns: string
            }
            foldername: {
                Args: {
                    name: string
                }
                Returns: unknown
            }
            get_size_by_bucket: {
                Args: Record<PropertyKey, never>
                Returns: {
                    size: number
                    bucket_id: string
                }[]
            }
            search: {
                Args: {
                    prefix: string
                    bucketname: string
                    limits?: number
                    levels?: number
                    offsets?: number
                    search?: string
                    sortcolumn?: string
                    sortorder?: string
                }
                Returns: {
                    name: string
                    id: string
                    updated_at: string
                    created_at: string
                    last_accessed_at: string
                    metadata: Json
                }[]
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
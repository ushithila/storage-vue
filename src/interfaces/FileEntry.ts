export interface FileEntry {
  id: string;
  name: string;
  path: string;
  parentPath: string | null; 
  parentId: string | null; 
  type: string; 
  size: number; 
  createdAt: string; 
  modifiedAt: string;  
};
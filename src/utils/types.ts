

export interface ObjectItem {
  id: number;
  uid: string;
  lantai: string;
  name: string;
  desc: string;
  gambar: string;
}
export interface Category {
  id: string;
  name: string;
}

export interface Beacon {
  _id: string;
  beacon_id: string;
  rssi: number;
}

export interface Navigation {
  start: string;
  end?: string;
}

export interface NavigationContextType {
  navigation: Navigation;
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>>;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MapDataContextType {
  objects: ObjectItem[];
  beacons?: Beacon[];
  refetchData: () => void;
}

export interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BleBeacon {
  name: string;
  id: string;
  rssi: number;
  txPower: number;
  uuids: string[];
}

export interface Vertex {
  id: string;
  cx: number;
  cy: number;
}

export interface Edge {
  id: string;
  from: string;
  to: string;
  floor: number;
}

export interface GraphData {
  vertices: Vertex[];
  edges: Edge[];
}


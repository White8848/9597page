
export interface StatItem {
  label: string;
  value: string;
  trend?: string;
  icon: string;
  status?: string;
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video' | 'cad' | 'specs';
  category: 'Mechanical' | 'Match VODs' | 'Electronics' | 'Software';
  title: string;
  imageUrl?: string;
  description?: string;
  metadata?: {
    iso?: string;
    fstop?: string;
    shutter?: string;
    vodRef?: string;
  };
}

export interface TechnicalLog {
  timestamp: string;
  status: 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
  component: string;
  message: string;
}

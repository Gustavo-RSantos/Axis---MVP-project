import Button from './Button';
import { Badge } from './Badge';
import { Calendar, Clock } from 'lucide-react';

interface CardExamesProps {
  title: string;
  date: string;
  time: string;
  status: 'agendado' | 'pendente' | 'confirmado';
}

const statusConfig = {
  agendado: { label: 'Agendado', className: 'bg-blue-100 text-blue-700 hover:bg-blue-100' },
  pendente: { label: 'Pendente', className: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100' },
  confirmado: { label: 'Confirmado', className: 'bg-green-100 text-green-700 hover:bg-green-100' },
};

export default function Card_Exames({ title, date, time, status }: CardExamesProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h4 className="text-gray-900 mb-3">{title}</h4>
          
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm">Data marcada: {date}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gray-400" />
              <span className="text-sm">Horário: {time}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge className={statusInfo.className}>
                {statusInfo.label}
              </Badge>
            </div>
          </div>
        </div>

        {/* <Button 
          className="cursor-pointer h-9 px-4 py-2 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 w-full sm:w-auto whitespace-nowrap"
        >
          Editar
        </Button> */}
      </div>
    </div>
  );
}

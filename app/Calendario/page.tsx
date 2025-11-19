"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { useEffect, useState } from "react";
import { Calendar, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/Dialog";
import {
  AlertDialogs,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/Alert_Dialog";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import Card from "../components/ui/Post_Card";
import { ContentCalendar } from "../components/ui/Card_Calendar";

interface Event {
  calendar_id: number;
  calendar_consulta: string;
  calendar_hour: string;
  calendar_date: Date | string;
}

export default function App() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);

  const [showModal, setShowModal] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [idToDelete, setIdToDelete] = useState<number | null>(null);

  const [newEvent, setNewEvent] = useState<Event>({
    calendar_id: 0,
    calendar_consulta: "",
    calendar_hour: "",
    calendar_date: "",
  });

  function handleDeleteModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id));
  }
  // Função para fechar os modais
  function handleCloseModal() {
    setShowModal(false);
    setNewEvent({
      calendar_consulta: "",
      calendar_hour: "",
      calendar_date: "",
      calendar_id: 0,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewEvent({
      ...newEvent,
      calendar_consulta: event.target.value,
    });
  };

  function handleChangeHour(event: React.ChangeEvent<HTMLInputElement>): void {
    setNewEvent({
      ...newEvent,
      calendar_hour: event.target.value,
    });
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (data.success) {
          const formattedEvents = data.events.map((event: Event) => ({
            ...event,
            calendar_date: event.calendar_date
              ? new Date(event.calendar_date)
              : new Date(),
          }));
          setAllEvents(formattedEvents);
        } else {
          console.error("Erro ao carregar eventos:", data.message);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };
    fetchEvents();
  }, []);

  function handleDateClick(arg: { date: Date }) {
    setNewEvent({
      ...newEvent,
      calendar_date: arg.date,
      calendar_id: 0, // Não usado no envio
    });
    setShowModal(true);
  }

  async function handleDelete() {
    if (!idToDelete) return;
    try {
      const response = await fetch("/api/events", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ calendar_id: idToDelete }),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        setAllEvents(
          allEvents.filter((event) => event.calendar_id !== idToDelete)
        );
        setShowDeleteModal(false);
        setIdToDelete(null);
      } else {
        console.error("Erro ao excluir:", data.message);
      }
    } catch (error) {
      console.error("Erro na requisição de delete:", error);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // Combina data e hora em uma única Date
      let combinedDate: Date;
      if (newEvent.calendar_date instanceof Date) {
        combinedDate = new Date(newEvent.calendar_date);
      } else {
        combinedDate = new Date(newEvent.calendar_date);
      }
      if (newEvent.calendar_hour) {
        const [hours, minutes] = newEvent.calendar_hour.split(":").map(Number);
        combinedDate.setHours(hours, minutes, 0, 0); // Define horas, minutos, segundos e milissegundos
      }

      // Converta para ISO string
      const eventToSend = {
        calendar_consulta: newEvent.calendar_consulta,
        calendar_date: combinedDate.toISOString(),
      };

      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventToSend),
      });
      const data = await response.json();
      if (data.success) {
        setAllEvents([...allEvents, data.event]);
        setShowModal(false);
        setNewEvent({
          calendar_id: 0,
          calendar_hour: "",
          calendar_consulta: "",
          calendar_date: "",
        });
      } else {
        console.error("Erro ao criar evento:", data.message);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }

  const calendarEvents = allEvents.map((event) => ({
    id: event.calendar_id.toString(),
    title: event.calendar_consulta,
    start: event.calendar_date,
  }));

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-teal-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-linear-to-br from-teal-500 to-cyan-600 rounded-xl shadow-lg">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-slate-900">Calendário de Eventos</h1>
                <p className="text-slate-500">
                  Organize seus compromissos com facilidade
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-linear-to-r from-teal-50 to-cyan-50 rounded-full shadow-sm border border-teal-100">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-teal-700">
                {allEvents.length} eventos agendados
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="shadow-2xl border-slate-200 bg-white/90 backdrop-blur-sm overflow-hidden">
          <ContentCalendar className="p-6 md:p-8">
            <div className="mb-6 p-4 bg-linear-to-r from-teal-50 via-cyan-50 to-blue-50 rounded-xl border border-teal-100">
              <p className="text-slate-700 text-center">
                💡 <span className="text-teal-700">Dica:</span> Clique em
                qualquer data do calendário para criar um novo evento
              </p>
            </div>

            <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
              }}
              events={calendarEvents}
              nowIndicator={true}
              editable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              eventClick={(data) => handleDeleteModal(data)}
              height="auto"
              eventClassNames="cursor-pointer hover:opacity-80 transition-opacity"
              locale="pt-br"
              buttonText={{
                today: "Hoje",
                month: "Mês",
                week: "Semana",
                day: "Dia",
                list: "Lista",
              }}
            />
          </ContentCalendar>
        </Card>
      </main>

      {/* Tela de confirmação de exclusão de consulta */}
      <AlertDialogs open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <AlertDialogContent className="bg-white/95 backdrop-blur-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-full">
                <Calendar className="h-5 w-5 text-red-600" />
              </div>
              Excluir Evento
            </AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este evento? Esta ação não pode ser
              desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleCloseModal}
              className="hover:bg-slate-100"
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogs>

      {/* Tela de adicionar novo evento */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-white/95 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <div className="p-2 bg-linear-to-br from-teal-100 to-cyan-100 rounded-full">
                <Calendar className="h-5 w-5 text-teal-600" />
              </div>
              Criar Novo Evento
            </DialogTitle>
            <DialogDescription>
              Adicione um novo evento ao seu calendário. Clique em salvar quando
              terminar.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 py-4">
              <div className="space-y-2 flex gap-6">
                <div>
                  <Label htmlFor="title" className="text-slate-700 mb-1">
                    Nome da Consulta
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    name="title"
                    value={newEvent.calendar_consulta}
                    onChange={handleChange}
                    placeholder="Digite nome da consulta..."
                    className="w-60 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <Label htmlFor="title" className="text-slate-700 mb-1">
                    Horario da Consulta
                  </Label>
                  <Input
                    id="title"
                    type="time"
                    name="title"
                    value={newEvent.calendar_hour}
                    onChange={handleChangeHour}
                    placeholder="Digite o título do evento..."
                    className="w-40 border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 cursor-pointer hover:bg-slate-100"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={newEvent.calendar_consulta === ""}
                className="bg-linear-to-r cursor-pointer px-4 py-2 from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md disabled:opacity-50"
              >
                Criar Evento
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* ESTILIZAÇÃO PARA O CALENDAR */}
      <style jsx global>{`
        .fc {
          font-family: inherit;
        }
        .fc-theme-standard td,
        .fc-theme-standard th {
          border-color: #e2e8f0;
        }
        .fc-theme-standard .fc-scrollgrid {
          border-color: #e2e8f0;
        }
        .fc .fc-button-primary {
          background: linear-gradient(to right, #0d9488, #0891b2);
          border: none;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }
        .fc .fc-button-primary:hover {
          background: linear-gradient(to right, #0f766e, #0e7490);
        }
        .fc .fc-button-primary:not(:disabled):active,
        .fc .fc-button-primary:not(:disabled).fc-button-active {
          background: linear-gradient(to right, #115e59, #155e75);
        }
        .fc-daygrid-day:hover {
          background-color: #f0fdfa;
        }
        .fc-daygrid-day-today {
          background-color: #ccfbf1 !important;
        }
        .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
          background: linear-gradient(to bottom right, #14b8a6, #06b6d4);
          color: white;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 4px;
        }
        .fc-event {
          border-radius: 6px;
          padding: 4px 6px;
          border: none;
        }
        .fc-daygrid-event {
          border-radius: 6px;
        }
        .fc-h-event {
          background: linear-gradient(to right, #14b8a6, #06b6d4);
          border: none;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
        }
        .fc-h-event:hover {
          background: linear-gradient(to right, #0d9488, #0891b2);
        }
        .fc-toolbar-title {
          color: #0f172a;
          font-weight: 600;
        }
        .fc-col-header-cell {
          background-color: #f8fafc;
          color: #475569;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}

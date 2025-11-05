"use client"

import { motion } from 'motion/react';
import { useState } from 'react';

import { Heart, MessageCircle, Share2, Plus, TrendingUp, Sparkles, Users, Flame } from 'lucide-react';
import { Avatar, AvatarFallback } from '../components/ui/Avatar';
import  Separator  from '../components/ui/Separator';
import { Badge } from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Input  from '../components/ui/Input';
import Textarea from '../components/ui/TextArea';
import Card  from '../components/ui/Post_Card';
import Image from 'next/image';

interface Comentario {
  id: number;
  autor: string;
  avatar: string;
  conteudo: string;
  tempo: string;
}

interface Post {
  id: number;
  autor: string;
  avatar: string;
  tempo: string;
  conteudo: string;
  imagem?: string;
  categoria: string;
  curtidas: number;
  comentarios: Comentario[];
  curtido: boolean;
}


export default function App(){

    const [posts, setPosts] = useState<Post[]>([
        {
        id: 1,
        autor: 'Carlos Silva',
        avatar: 'CS',
        tempo: 'há 2 horas',
        conteudo: 'Comecei minha jornada de exercícios há 3 meses e os resultados têm sido incríveis! Perdi 8kg e me sinto muito mais disposto. A dica que dou é: consistência é tudo. Comece devagar e vá aumentando gradualmente.',
        imagem: "https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjIxMDU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        categoria: 'Fitness',
        curtidas: 124,
        curtido: false,
            comentarios: [
                {
                id: 1,
                autor: 'Maria Santos',
                avatar: 'MS',
                conteudo: 'Parabéns pela conquista! Que inspiração! 💪',
                tempo: 'há 1 hora'
                },
                {
                id: 2,
                autor: 'João Pedro',
                avatar: 'JP',
                conteudo: 'Muito bom! Qual rotina você seguiu?',
                tempo: 'há 45 min'
                }
            ]
        },
        {
        id: 2,
        autor: 'Ana Paula',
        avatar: 'AP',
        tempo: 'há 4 horas',
        conteudo: 'Descobri que a meditação matinal mudou completamente minha vida. Comecei com apenas 5 minutos por dia e agora consigo meditar por 30 minutos. Minha ansiedade diminuiu muito e durmo muito melhor.',
        imagem: 'https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjByZWxheGF0aW9ufGVufDF8fHx8MTc2MjIwMjMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categoria: 'Bem-estar',
        curtidas: 89,
        curtido: true,
            comentarios: [
                {
                id: 1,
                autor: 'Ricardo Lima',
                avatar: 'RL',
                conteudo: 'Você usa algum app específico?',
                tempo: 'há 2 horas'
                }
            ]
        },
        {
        id: 3,
        autor: 'Fernando Costa',
        avatar: 'FC',
        tempo: 'há 6 horas',
        conteudo: 'Alguém tem dicas de alimentação saudável para quem trabalha o dia todo? Estou tentando melhorar minha dieta mas sempre acabo comendo besteira por falta de tempo para preparar refeições.',
        imagem: 'https://images.unsplash.com/photo-1606858274001-dd10efc5ce7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBwcmVwfGVufDF8fHx8MTc2MjExNzEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categoria: 'Nutrição',
        curtidas: 56,
        curtido: false,
            comentarios: [
                {
                    id: 1,
                    autor: 'Juliana Oliveira',
                    avatar: 'JO',
                    conteudo: 'Meal prep aos domingos mudou minha vida! Deixo tudo pronto para a semana.',
                    tempo: 'há 3 horas'
                },
                {
                    id: 2,
                    autor: 'Pedro Henrique',
                    avatar: 'PH',
                    conteudo: 'Tenho várias receitas rápidas e saudáveis. Te mando no privado!',
                    tempo: 'há 2 horas'
                }
            ]
        }
    ]);

    const [novoPost, setNovoPost] = useState('');
    const [novoComentario, setNovoComentario] = useState<{ [key: number]: string }>({});
    const [mostrarComentarios, setMostrarComentarios] = useState<{ [key: number]: boolean }>({});

    const handleCurtir = (postId: number) => {
        setPosts(posts.map(post => {
        if (post.id === postId) {
            return {
            ...post,
            curtido: !post.curtido,
            curtidas: post.curtido ? post.curtidas - 1 : post.curtidas + 1
            };
        }
        return post;
        }));
    };

    const handleAdicionarComentario = (postId: number) => {
        const comentarioTexto = novoComentario[postId]?.trim();
        if (!comentarioTexto) return;

        setPosts(posts.map(post => {
        if (post.id === postId) {
            return {
            ...post,
            comentarios: [
                ...post.comentarios,
                {
                id: post.comentarios.length + 1,
                autor: 'Você',
                avatar: 'VC',
                conteudo: comentarioTexto,
                tempo: 'agora'
                }
            ]
            };
        }
        return post;
        }));

        setNovoComentario({ ...novoComentario, [postId]: '' });
    };

    const toggleComentarios = (postId: number) => {
        setMostrarComentarios({
        ...mostrarComentarios,
        [postId]: !mostrarComentarios[postId]
        });
    };

    return(
        <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50">
            {/* Decorative Background Pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-teal-400/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-blue-400/20 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Hero Section */}
            <motion.section
                className="relative py-12 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10" />
                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        className="text-center"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 shadow-sm">
                            <Sparkles className="w-4 h-4 text-teal-600" />
                            <span className="text-teal-700">+2.5k membros ativos hoje</span>
                        </div>
                        <h1 className="text-slate-900 mb-4 max-w-3xl mx-auto">Sua comunidade de saúde e bem-estar</h1>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">Conecte-se com pessoas que compartilham os mesmos objetivos. Compartilhe suas conquistas, aprenda com as experiências dos outros e cresça junto com a comunidade.</p>
                        
                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            <motion.div 
                                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Users className="w-5 h-5 text-teal-600" />
                                <div className="text-left">
                                    <p className="text-slate-500">Membros</p>
                                    <p className="text-slate-900">12.4k</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Flame className="w-5 h-5 text-orange-500" />
                                <div className="text-left">
                                    <p className="text-slate-500">Posts Hoje</p>
                                    <p className="text-slate-900">248</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-2 px-5 py-3 bg-white rounded-2xl shadow-lg"
                                whileHover={{ scale: 1.05 }}
                            >
                                <TrendingUp className="w-5 h-5 text-emerald-600" />
                                <div className="text-left">
                                    <p className="text-slate-500">Engajamento</p>
                                    <p className="text-slate-900">+32%</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-6 pb-12">
                <div className="grid lg:grid-cols-[280px_1fr_280px] md:grid-cols-[240px_1fr] gap-6">
                
                {/* Left Sidebar */}
                <motion.aside
                    className="hidden md:block space-y-4"
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="p-5 bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg sticky top-6">
                        <h3 className="text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-5 bg-linear-to-b from-teal-500 to-cyan-500 rounded-full" />
                            Categorias
                        </h3>
                        <div className="space-y-2">
                            {[
                                { name: 'Fitness', color: 'from-orange-500 to-red-500', count: 145 },
                                { name: 'Nutrição', color: 'from-green-500 to-emerald-500', count: 98 },
                                { name: 'Bem-estar', color: 'from-purple-500 to-pink-500', count: 127 },
                                { name: 'Saúde Mental', color: 'from-blue-500 to-cyan-500', count: 86 },
                                { name: 'Sono', color: 'from-indigo-500 to-purple-500', count: 62 }
                            ].map((cat) => (
                            <button
                                key={cat.name}
                                className="group w-full text-left px-4 py-3 rounded-xl hover:bg-linear-to-r hover:from-teal-50 hover:to-cyan-50 text-slate-700 transition-all hover:shadow-md hover:scale-[1.02] flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full bg-linear-to-r ${cat.color}`} />
                                    {cat.name}
                                </div>
                                <span className="text-slate-400 group-hover:text-teal-600">{cat.count}</span>
                            </button>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-5 bg-linear-to-br from-teal-500 to-cyan-600 text-white shadow-lg">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-5 h-5" />
                            <h3>Desafio da Semana</h3>
                        </div>
                        <p className="mb-4 opacity-90">30 minutos de exercício por dia durante 7 dias</p>
                        <div className="bg-white/20 rounded-full h-2 mb-2 overflow-hidden">
                            <div className="bg-white h-full w-3/4 rounded-full" />
                        </div>
                        <p className="opacity-75">75% completado</p>
                    </Card>
                </motion.aside>

                {/* Feed */}
                <div className="space-y-5">
                    {/* Criar Post */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Card className="p-5 bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg">
                            <div className="flex gap-4">
                                <Avatar className="w-12 h-12">
                                    <AvatarFallback className="bg-linear-to-br from-teal-400 to-cyan-500 text-white">VC</AvatarFallback>
                                </Avatar>
                                <Textarea
                                    placeholder="Compartilhe sua jornada de saúde..."
                                    value={novoPost}
                                    onChange={(e) => setNovoPost(e.target.value)}
                                    className="min-h-20 border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-slate-50"
                                />
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <Button className="text-slate-600 hover:text-teal-600 py-4 px-2">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Adicionar imagem
                                </Button>
                                <Button className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md  py-2 px-4">
                                    Publicar
                                </Button>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Posts */}
                    {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    >
                        <Card className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                        {/* Header do Post */}
                        <div className="p-5">
                            <div className="flex items-start gap-3 mb-4">
                            <Avatar className="w-11 h-11">
                                <AvatarFallback className="bg-linear-to-br from-slate-200 to-slate-300 text-slate-700">
                                {post.avatar}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <p className="text-slate-900">{post.autor}</p>
                                    <Badge variant="secondary" className="bg-linear-to-r from-teal-100 to-cyan-100 text-teal-700 border-0">
                                        {post.categoria}
                                    </Badge>
                                </div>
                                <p className="text-slate-500">{post.tempo}</p>
                            </div>
                            </div>

                            <p className="text-slate-700 leading-relaxed mb-4">{post.conteudo}</p>
                        </div>

                        {/* Imagem do Post */}
                        {post.imagem && (
                            <div className="relative h-72 overflow-hidden bg-slate-100">
                                {/* <Image
                                    src={post.imagem}
                                    alt="Post"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                /> */}
                            </div>
                        )}

                        {/* Ações */}
                        <div className="p-5 pt-4 bg-linear-to-b from-transparent to-slate-50/50">
                            <div className="flex items-center gap-6 mb-4">
                            <motion.button
                                onClick={() => handleCurtir(post.id)}
                                className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors group"
                                whileTap={{ scale: 0.95 }}
                            >
                                <Heart
                                className={`w-5 h-5 transition-all ${
                                    post.curtido ? 'fill-red-500 text-red-500 scale-110' : 'group-hover:scale-110'
                                }`}
                                />
                                <span className={post.curtido ? 'text-red-500' : ''}>
                                {post.curtidas}
                                </span>
                            </motion.button>
                            <motion.button
                                onClick={() => toggleComentarios(post.id)}
                                className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
                                whileTap={{ scale: 0.95 }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span>{post.comentarios.length}</span>
                            </motion.button>
                            <motion.button 
                                className="flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors ml-auto"
                                whileTap={{ scale: 0.95 }}
                            >
                                <Share2 className="w-5 h-5" />
                            </motion.button>
                            </div>

                            {/* Comentários */}
                            {mostrarComentarios[post.id] && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Separator className="mb-4" />
                                <div className="space-y-3">
                                {post.comentarios.map((comentario) => (
                                    <div key={comentario.id} className="flex gap-3">
                                    <Avatar className="w-8 h-8">
                                        <AvatarFallback className="bg-slate-100 text-slate-600">
                                        {comentario.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 bg-linear-to-br from-slate-50 to-slate-100/50 rounded-xl p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                        <p className="text-slate-900">{comentario.autor}</p>
                                        <p className="text-slate-500">{comentario.tempo}</p>
                                        </div>
                                        <p className="text-slate-700">{comentario.conteudo}</p>
                                    </div>
                                    </div>
                                ))}

                                {/* Novo Comentário */}
                                <div className="flex gap-3 pt-2">
                                    <Avatar className="w-8 h-8">
                                        <AvatarFallback className="bg-linear-to-br from-teal-400 to-cyan-500 text-white">VC</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 flex gap-2">
                                    <Input
                                        type='text'
                                        placeholder="Adicione um comentário..."
                                        value={novoComentario[post.id] || ''}
                                        onChange={(e) =>
                                        setNovoComentario({
                                            ...novoComentario,
                                            [post.id]: e.target.value
                                        })
                                        }
                                        className="border-slate-200 focus:border-teal-500 focus:ring-teal-500 bg-white"
                                        onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            handleAdicionarComentario(post.id);
                                        }
                                        }}
                                    />
                                    <Button
                                        onClick={() => handleAdicionarComentario(post.id)}
                                        className="bg-linear-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-md"
                                    >
                                        Enviar
                                    </Button>
                                    </div>
                                </div>
                                </div>
                            </motion.div>
                            )}
                        </div>
                        </Card>
                    </motion.div>
                    ))}
                </div>

                {/* Right Sidebar - Hidden on smaller screens, visible on large */}
                <motion.aside
                    className="hidden lg:block space-y-4"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="p-5 bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg sticky top-6">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-teal-600" />
                            <h3 className="text-slate-900">Em alta hoje</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { tag: '#Treino30Dias', posts: 109, color: 'from-orange-500 to-red-500' },
                                { tag: '#AlimentaçãoLimpa', posts: 87, color: 'from-green-500 to-emerald-500' },
                                { tag: '#MeditaçãoDiária', posts: 64, color: 'from-purple-500 to-pink-500' }
                            ].map((item) => (
                                <motion.div 
                                    key={item.tag} 
                                    className="p-3 rounded-xl bg-linear-to-br from-slate-50 to-slate-100/50 hover:shadow-md transition-all cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-2 h-2 rounded-full bg-linear-to-r ${item.color}`} />
                                        <p className="text-slate-700">{item.tag}</p>
                                    </div>
                                    <p className="text-slate-500 ml-4">
                                        {item.posts} posts
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-5 bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg">
                        <h3 className="text-slate-900 mb-4">Membros Ativos</h3>
                        <div className="space-y-3">
                            {[
                                { name: 'Marina Costa', avatar: 'MC', status: 'online' },
                                { name: 'Rafael Lima', avatar: 'RL', status: 'online' },
                                { name: 'Julia Santos', avatar: 'JS', status: 'away' }
                            ].map((member) => (
                                <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
                                    <div className="relative">
                                        <Avatar className="w-10 h-10">
                                            <AvatarFallback className="bg-linear-to-br from-slate-200 to-slate-300 text-slate-700">
                                                {member.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                    </div>
                                    <p className="text-slate-700">{member.name}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </motion.aside>

                </div>
            </div>
        </div>
    )
}

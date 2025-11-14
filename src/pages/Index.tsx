import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from '@/components/ui/icon';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const priceData = [
  { month: 'Янв', rate: 2850, volume: 45 },
  { month: 'Фев', rate: 2920, volume: 52 },
  { month: 'Мар', rate: 2780, volume: 48 },
  { month: 'Апр', rate: 2950, volume: 61 },
  { month: 'Май', rate: 3100, volume: 58 },
  { month: 'Июн', rate: 3050, volume: 64 },
];

const supplierData = [
  { id: 1, name: 'China Logistics Co.', rate: 2950, currency: '¥', reliability: 98, avgDelay: '2 дня', status: 'active' },
  { id: 2, name: 'Beijing Transport', rate: 3100, currency: '¥', reliability: 95, avgDelay: '3 дня', status: 'active' },
  { id: 3, name: 'Shanghai Express', rate: 2850, currency: '¥', reliability: 97, avgDelay: '2 дня', status: 'active' },
  { id: 4, name: 'Guangzhou Freight', rate: 3250, currency: '¥', reliability: 92, avgDelay: '4 дня', status: 'pending' },
];

const routeDistribution = [
  { name: 'Пекин-Москва', value: 35, color: '#0EA5E9' },
  { name: 'Шанхай-СПб', value: 28, color: '#1A1F2C' },
  { name: 'Гуанчжоу-Екб', value: 22, color: '#8A898C' },
  { name: 'Другие', value: 15, color: '#F1F0FB' },
];

const documents = [
  { id: 1, name: 'Отчет за Q2 2024', type: 'PDF', date: '15.06.2024', size: '2.4 МБ', status: 'ready' },
  { id: 2, name: 'Тарифная сетка май', type: 'XLSX', date: '01.05.2024', size: '856 КБ', status: 'ready' },
  { id: 3, name: 'Договор China Logistics', type: 'PDF', date: '12.04.2024', size: '1.2 МБ', status: 'ready' },
  { id: 4, name: 'Отчет за Q3 2024', type: 'PDF', date: 'В процессе', size: '-', status: 'processing' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSuppliers = supplierData.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CargoRate</h1>
                <p className="text-xs text-muted-foreground">Стандартизация тарифов</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="LayoutDashboard" size={16} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-2">
              <Icon name="FileText" size={16} />
              Документы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>Средняя ставка</CardDescription>
                  <CardTitle className="text-3xl">¥3,025</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-green-600">
                    <Icon name="TrendingUp" size={16} className="mr-1" />
                    +5.2% за месяц
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>Активных поставщиков</CardDescription>
                  <CardTitle className="text-3xl">12</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Users" size={16} className="mr-1" />
                    4 новых за месяц
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>Объём перевозок</CardDescription>
                  <CardTitle className="text-3xl">328</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Package" size={16} className="mr-1" />
                    контейнеров
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>Надёжность</CardDescription>
                  <CardTitle className="text-3xl">96%</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-green-600">
                    <Icon name="CheckCircle" size={16} className="mr-1" />
                    Отличный показатель
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Динамика ставок</CardTitle>
                  <CardDescription>Средняя стоимость перевозки за последние 6 месяцев</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F0FB" />
                      <XAxis dataKey="month" stroke="#8A898C" />
                      <YAxis stroke="#8A898C" />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="rate" stroke="#0EA5E9" strokeWidth={3} name="Ставка (¥)" />
                      <Line type="monotone" dataKey="volume" stroke="#1A1F2C" strokeWidth={2} name="Объём" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Распределение по маршрутам</CardTitle>
                  <CardDescription>Доля перевозок</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={routeDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {routeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Поставщики</CardTitle>
                    <CardDescription>Актуальная информация по подрядчикам</CardDescription>
                  </div>
                  <Input
                    placeholder="Поиск поставщика..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-xs"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Поставщик</TableHead>
                      <TableHead>Ставка</TableHead>
                      <TableHead>Надёжность</TableHead>
                      <TableHead>Ср. задержка</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id} className="hover:bg-muted/50 transition-colors">
                        <TableCell className="font-medium">{supplier.name}</TableCell>
                        <TableCell>
                          <span className="font-semibold">{supplier.currency}{supplier.rate.toLocaleString()}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-secondary rounded-full h-2 max-w-[60px]">
                              <div
                                className="bg-primary h-2 rounded-full transition-all"
                                style={{ width: `${supplier.reliability}%` }}
                              />
                            </div>
                            <span className="text-sm">{supplier.reliability}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{supplier.avgDelay}</TableCell>
                        <TableCell>
                          <Badge variant={supplier.status === 'active' ? 'default' : 'secondary'}>
                            {supplier.status === 'active' ? 'Активен' : 'Ожидание'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Icon name="MoreHorizontal" size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Документы и отчётность</h2>
                <p className="text-muted-foreground mt-1">Управление документацией по перевозкам</p>
              </div>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Загрузить документ
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>Всего документов</CardDescription>
                  <CardTitle className="text-3xl">47</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="FileText" size={16} className="mr-1" />
                    За последний месяц
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>Отчёты готовы</CardDescription>
                  <CardTitle className="text-3xl">3</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-green-600">
                    <Icon name="CheckCircle" size={16} className="mr-1" />
                    Доступны для скачивания
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <CardDescription>В обработке</CardDescription>
                  <CardTitle className="text-3xl">1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-1" />
                    Формируется отчёт
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Последние документы</CardTitle>
                <CardDescription>Недавно добавленные и сгенерированные файлы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={doc.type === 'PDF' ? 'FileText' : 'Sheet'} size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{doc.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                            <span>{doc.type}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                            <span>•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.status === 'ready' ? (
                          <>
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              Готов
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <Icon name="Download" size={16} />
                            </Button>
                          </>
                        ) : (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            В процессе
                          </Badge>
                        )}
                        <Button variant="ghost" size="sm">
                          <Icon name="MoreVertical" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
                <CardDescription>Часто используемые функции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto flex-col py-6 gap-2 hover-scale">
                    <Icon name="FileSpreadsheet" size={32} className="text-primary" />
                    <span className="font-medium">Экспорт в Excel</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-6 gap-2 hover-scale">
                    <Icon name="PieChart" size={32} className="text-primary" />
                    <span className="font-medium">Создать отчёт</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-6 gap-2 hover-scale">
                    <Icon name="Mail" size={32} className="text-primary" />
                    <span className="font-medium">Отправить по почте</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex-col py-6 gap-2 hover-scale">
                    <Icon name="Archive" size={32} className="text-primary" />
                    <span className="font-medium">Архивировать</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [promoCode, setPromoCode] = useState('');

  // Моковые данные для демонстрации
  const userCoins = 1250;
  const nextEventDate = '14 февраля 2026';
  
  const categories = [
    { name: 'Аккаунты', icon: 'User', count: 0 },
    { name: 'Гемы', icon: 'Gem', count: 0 },
    { name: 'Бойцы', icon: 'Swords', count: 0 },
    { name: 'Скины', icon: 'Sparkles', count: 0 },
  ];

  const products = [
    {
      id: 1,
      title: 'Премиум аккаунт',
      description: 'Полностью прокачанный аккаунт с легендарными бойцами',
      price: 2500,
      discount: null,
      image: '💎',
      category: 'Аккаунты'
    },
    {
      id: 2,
      title: '10000 гемов',
      description: 'Пополни запасы гемов для открытия ящиков',
      price: 500,
      discount: 25,
      image: '💰',
      category: 'Гемы'
    },
    {
      id: 3,
      title: 'Редкий скин "Золотой Эмс"',
      description: 'Эксклюзивный золотой скин для персонажа Эмс',
      price: 1200,
      discount: null,
      image: '✨',
      category: 'Скины'
    },
  ];

  const upcomingEvents = [
    {
      title: 'День Святого Валентина',
      date: '14 февраля 2026',
      discount: '20%',
      description: 'Романтические скидки на все скины!',
      color: 'bg-gradient-to-r from-pink-500 to-red-500'
    },
    {
      title: 'Черная Пятница #1',
      date: 'Весна 2026',
      discount: '80%',
      description: 'Грандиозная распродажа!',
      color: 'bg-gradient-to-r from-purple-600 to-indigo-600'
    }
  ];

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'BBATTLE') {
      alert('✅ Промокод BBattle активирован! Скидка 25% применена!');
      setPromoCode('');
    } else {
      alert('❌ Промокод не найден');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-5xl animate-pulse-slow">🎮</div>
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  BRAWL GAMES
                </h1>
                <p className="text-xs text-muted-foreground">Маркетплейс игровых товаров</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
                <Icon name="Coins" size={20} />
                <span className="font-bold">{userCoins}</span>
                <span className="text-sm">бравлкоинов</span>
              </div>
              
              <Button variant="outline" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              
              <Button variant="outline" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-20">🎯</div>
          <div className="relative z-10">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Следующий ивент</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Готовься к {nextEventDate}!
            </h2>
            <p className="text-xl md:text-2xl mb-6 text-white/90">
              День Святого Валентина — скидки до 20% на все товары!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                <Icon name="Calendar" size={20} className="mr-2" />
                Все ивенты
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Gift" size={20} className="mr-2" />
                Получить бравлкоины
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coins Info */}
      <section className="container mx-auto px-4 py-8">
        <Card className="border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-yellow-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Coins" size={24} className="text-amber-600" />
              Твои бравлкоины
            </CardTitle>
            <CardDescription>Накапливай монеты и получай скидки!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-amber-600">{userCoins} монет</span>
              <Badge variant="secondary" className="text-lg px-4 py-1">+50 сегодня</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🥉</div>
                <p className="font-semibold">1000+ монет</p>
                <p className="text-sm text-muted-foreground">Скидка 25%</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🥈</div>
                <p className="font-semibold">2500+ монет</p>
                <p className="text-sm text-muted-foreground">Скидка 50%</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl mb-2">🥇</div>
                <p className="font-semibold">5000+ монет</p>
                <p className="text-sm text-muted-foreground">Скидка 80%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Promo Code Section */}
      <section className="container mx-auto px-4 py-6">
        <Card className="border-dashed border-2 border-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Tag" size={24} className="text-secondary" />
              Есть промокод?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Введи промокод (например, BBattle)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="font-mono uppercase"
              />
              <Button onClick={applyPromoCode} className="bg-secondary hover:bg-secondary/90">
                Применить
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              💡 Попробуй промокод <span className="font-bold text-secondary">BBattle</span> для скидки 25%
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Search and Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="relative">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Найди свой идеальный товар..."
              className="pl-10 h-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => (
            <Card key={cat.name} className="hover:shadow-lg transition-all cursor-pointer hover:scale-105 hover:border-primary">
              <CardContent className="p-6 text-center">
                <Icon name={cat.icon} size={32} className="mx-auto mb-2 text-primary" />
                <p className="font-semibold">{cat.name}</p>
                <Badge variant="secondary" className="mt-2">{cat.count} товаров</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Products Catalog */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">Каталог товаров</h2>
          <Button variant="outline">
            <Icon name="SlidersHorizontal" size={20} className="mr-2" />
            Фильтры
          </Button>
        </div>

        {products.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-2">Товары появятся совсем скоро!</h3>
            <p className="text-muted-foreground">
              Продавцы готовятся к запуску. Первые товары появятся после старта ивентов в феврале 2026!
            </p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all overflow-hidden group">
                <CardHeader className="relative">
                  {product.discount && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-white animate-pulse-slow">
                      -{product.discount}%
                    </Badge>
                  )}
                  <div className="text-7xl text-center my-4 group-hover:scale-110 transition-transform">
                    {product.image}
                  </div>
                  <Badge variant="outline">{product.category}</Badge>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div>
                    {product.discount ? (
                      <>
                        <p className="text-sm line-through text-muted-foreground">{product.price}₽</p>
                        <p className="text-2xl font-bold text-primary">
                          {Math.round(product.price * (1 - product.discount / 100))}₽
                        </p>
                      </>
                    ) : (
                      <p className="text-2xl font-bold">{product.price}₽</p>
                    )}
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-black mb-6">Предстоящие ивенты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className={`${event.color} p-6 text-white`}>
                <Badge className="mb-3 bg-white/20 text-white border-white/30">
                  {event.date}
                </Badge>
                <h3 className="text-2xl font-black mb-2">{event.title}</h3>
                <p className="text-white/90 mb-4">{event.description}</p>
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-black">{event.discount}</div>
                  <div className="text-sm">
                    максимальная<br />скидка
                  </div>
                </div>
              </div>
              <CardFooter className="p-4">
                <Button variant="outline" className="w-full">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Напомнить о событии
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brawl Games</h3>
              <p className="text-white/80">
                Маркетплейс игровых товаров с системой бравлкоинов и регулярными ивентами
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80">
                <li>Каталог</li>
                <li>Акции</li>
                <li>Ивенты</li>
                <li>Мой профиль</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-white/80">
                <li>Помощь</li>
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Правила</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Связь</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="secondary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="secondary">
                  <Icon name="HelpCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/20 text-white/80">
            <p>© 2026 Brawl Games. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

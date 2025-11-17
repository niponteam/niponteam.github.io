import SKillBar from "../SkillBar.jsx"
import Contact from "../contact.jsx"
import NiponAvatar from "../../assets/NiponAvatar.png"
import YogAvatar from "../../assets/YogAvatar.png"
import KomaruAvatar from "../../assets/KomaruAvatar.png"
import RomanAvatar from "../../assets/RomanAvatar.jpg"

export default function Main() {
    return (
        <div className={"Main"}>
            <h2>Мы просто рандомная команда которая делает рандомные штуки</h2>
            <section className={"team"}>
                <h3>Наши участники</h3>
                <div className={"team_member"}>
                    <img src={NiponAvatar} alt="Нипон" className="member-avatar" />
                    <h4>Нипон</h4>
                    <span>Какой то чувак который собрал эту всю команду ради прикола</span>
                    <div className={"skills"}>
                        <h5>Скилы</h5>
                        <SKillBar skillName={"Делать нормальные вещи"} level={-100} />
                        <SKillBar skillName={"Страдать херней"} level={10} />
                        <SKillBar skillName={"Не выпускать NiponOS"} level={250} />
                    </div>
                    <div className={"socials"}>
                        <h5>Контакты</h5>
                        <Contact name={"Телеграм канал"} url={"https://t.me/obshievmtipa"} />
                    </div>
                </div>
                <div className={"team_member"}>
                    <img src={YogAvatar} alt="Йог" className="member-avatar" />
                    <h4>Йог</h4>
                    <span>... мне нечего добавить сюда. Пранковать умеет, делать не то чтобы</span>
                    <div className={"skills"}>
                        <h5>Недоскилы</h5>
                        <SKillBar skillName={"Пранковать"} level={Infinity} />
                        <SKillBar skillName={"Страдать херней"} level={12} />
                    </div>
                    <div className={"socials"}>
                        <h5>Контакты</h5>
                        <Contact name={"telegram"} url={"https://t.me/yog774"} displaynames={"@yog774"}/>
                        <Contact name={"tiktok"} url={"https://www.tiktok.com/@sgema708"} displaynames={"@sgema708"}/>
                    </div>
                </div>
                <div className={"team_member"}>
                    <img src={KomaruAvatar} alt={"Комар"} className="member-avatar" />
                    <h4>Комар</h4>
                    <span>чувак который творит хрень и кодит на питонах и js.</span>
                    <div className={"skills"}>
                        <h5>Хрень а не скилы</h5>
                        <SKillBar skillName={"Кодить на Lua"} level={3.5} />
                        <SKillBar skillName={"Кодить на питоне"} level={6} />
                        <SKillBar skillName={"Кодить на JS"} level={4.5} />
                        <SKillBar skillName={"Херню делать"} level={99} />
                    </div>
                    <div className={"socials"}>
                        <Contact name={"Telegram"} url={"https://t.me/matveykostis"} displaynames={"@matveykostis"}/>
                        <Contact name={"GitHub"} url={"https://github.com/matveykostis"}/>
                        <Contact name={"KomaruSite"} url={"https://matveykostis.github.io/"}/>
                    </div>
                </div>
                <div className={"team_member"}>
                    <img src={RomanAvatar} alt={"Roman"} className="member-avatar" />
                    <h4>Roman</h4>
                    <span>ромка попка да</span>
                    <div className={"skills"}>
                        <h5>... ну тут должны были быть скилы, но их нет</h5>
                    </div>
                    <div className={"socials"}>
                        <Contact name={"Telegram"} url={"https://t.me/romanyaylol"} displaynames={"@romanyaylol"}/>
                    </div>
                </div>
            </section>

        </div>
)
}
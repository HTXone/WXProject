package test;

import com.WXSys.entity.User;
import com.WXSys.mapper.UserInfoMapper;
import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({
        "classpath:spring/applicationContext-dao.xml"
})
public class UserDaoTest {
    @Autowired
    private SqlSessionFactory sessionFactory;
    private SqlSession session;
    private UserInfoMapper UDao;

    @Autowired
    private BasicDataSource dataSource;

    @Test
    public void testConnection(){
        try {
            Connection connection = dataSource.getConnection();
            System.out.println(connection);
        } catch (SQLException e){
            e.printStackTrace();
        }
    }

    @Test
    public void init() throws IOException {
        session = sessionFactory.openSession();
        UDao = session.getMapper(UserInfoMapper.class);
        System.out.println(UDao);

        User user = UDao.userInfoGet(1);
        System.out.println(user.toString());
    }


}

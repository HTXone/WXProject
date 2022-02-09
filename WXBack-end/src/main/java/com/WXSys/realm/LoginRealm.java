package com.WXSys.realm;



import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


/**
 * Created by Jacey on 2017/6/30.
 */

@Repository
public class LoginRealm extends AuthorizingRealm{



    /**
     * 获取身份信息，我们可以在这个方法中，从数据库获取该用户的权限和角色信息
     *     当调用权限验证时，就会调用此方法
     */

    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }

    /**
     * 在这个方法中，进行身份验证
     *         login时调用
     */

    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        return null;
    }
}
